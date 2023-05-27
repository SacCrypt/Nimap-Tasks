const session = require("express-session")
const express = require('express')
const app = express();
const store = new session.MemoryStore()
app.use(express.json())
app.use(session({
    secret: "some secret",
    cookie: {maxAge : 30000},
    saveUninitialized: false,
    store
}))

const requireAuth = (req, res, next) =>{
    if (req.session.authenticated){
        next();
    }else{
        res.send("Credentials declined")
        return
    }
}

app.post("/login", requireAuth,  (req, res)=>{
    console.log(req.sessionID)
    const {username, password} = req.body
    if (username && password){
        if(!req.session.authenticated){
            if (username === 'abc'){
                req.session.authenticated = true
                req.session.user = username
            }
        }
        else{
            res.send(req.session)
        }
    }
})

app.listen(3000, ()=> {
    console.log("Server running on port 3000");
})
