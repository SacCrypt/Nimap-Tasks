const express = require('express')
const authRoutes = require("./routes/authRoutes")

const app = express();
app.use('/auth', authRoutes)

// set up view engine
app.set("view engine", "ejs")

app.get("/", (req, res)=> {
    res.render("home")
})

app.listen(3000, ()=> {
    console.log("listening on 3000");
})