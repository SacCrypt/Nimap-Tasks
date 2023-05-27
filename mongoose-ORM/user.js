const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: v => v % 2,
            message: props => `${props.value} is not an even number`
        }
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 10
    },
    friend:{
     type: mongoose.SchemaTypes.ObjectId,
     ref: "User"
    },
    hobbies: [String],
    address: {
        street: String,
        city: String
    }
})

userSchema.methods.sayHi = function(){
    console.log(`${this.name}`)
}

//on model not instance
userSchema.statics.findByName = function(name){
    return this.find({name: new RegExp(name, 'i')})
}

userSchema.query.byName = function(name){
    return this.where({ name: new RegExp(name, 'i')})
}

//virtual property
userSchema.virtual("namedEmail").get(function(){
    return `${this.name} <${this.email}>`
})

userSchema.pre('save', function(next){
    this.createdAt = Date.now()
    next()
})

userSchema.post('save', function(doc, next){
    // thing that is saved -> doc
    doc.sayHi()
    next()
})

module.exports = mongoose.model('user', userSchema)

