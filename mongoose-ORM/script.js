const mongoose = require('mongoose')
const User = require("./user")

mongoose.connect('mongodb+srv://sachin:sachin123@cluster0.ma3xxtp.mongodb.net/?retryWrites=true&w=majority')

const user = new User({
    name: "Sachin",
    age: 23,
    hobbies: ["lifting", "playing"],
    address: {
        street: "Main Street",
        city: "Maharashtra"
    }
})

user.name = "Anurag"
user.save().then(()=> console.log("Saved"))

