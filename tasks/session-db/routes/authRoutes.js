const passport = require("passport")

const router = require("express").Router()

router.get("/login", (req, res)=>{
    res.render("login")
})

router.get("/logout", (req, res)=> {
    res.send("logging out")
})

router.get("/google", passport.authenticate('google', {
    scope: ['profile']
}))


router.get("/google/redirect", (req, res) => {
    res.send("You reached the callback URI")
})

module.exports = router;
