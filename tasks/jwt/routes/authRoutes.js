const { Router } = require("express");
const {
  signupGet,
  signupPost,
  loginGet,
  loginPost,
  logout,
} = require("../controllers/authController");
const jwt = require("jsonwebtoken");
const router = Router();
const User = require("../models/User");

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret string", async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret string", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

router.get("*", checkUser);
router.get("/signup", signupGet);
router.get("/login", requireAuth, loginGet);
router.post("/signup", signupPost);
router.post("/login", loginPost);
router.post("/logout", logout);

module.exports = router;
