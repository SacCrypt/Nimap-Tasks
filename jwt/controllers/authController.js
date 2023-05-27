const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };
  if (err.message === "Incorrect Email") {
    errors.email = "This email is not valid";
  }
  if (err.password === "Incorrect Password") {
    errors.password = "This password is not valid";
  }

  if (err.code === 11000) {
    errors.email = "Email already exists";
    return errors;
  }
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "secret string", {
    expiresIn: maxAge,
  });
};
module.exports = {
  signupGet(req, res) {
    res.send("signupGet");
  },
  async signupPost(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.create({ email, password });
      const token = createToken(user._id);
      console.log(token);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
      res.status(201).json({ user });
    } catch (err) {
      const errors = handleErrors(err);
      res.status(400).json(errors);
    }
  },
  loginGet(req, res) {
    res.send("signupGet");
  },
  async loginPost(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.login(email, password);
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
      res.status(200).json({ user: user._id, message: "Success" });
    } catch (err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
  },
  logout(req, res) {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
  },
};
