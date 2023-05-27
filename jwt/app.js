const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());
const URI =
  "mongodb+srv://sachinfulsunge:sachinnimap123@cluster0.0oge2lc.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => app.listen(3000))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Home Page"));
app.use(authRoutes);
/*
app.get("/set-cookies", (req, res) => {
  //res.setHeader("Set-Cookie", "newUser=true");
  res.cookie("newUser", false);
  res.cookie("employee", true, {
    maxAge: 1000 * 60 * 60 * 24,
    secure: true,
    httpOnly: true,
  });

  res.send("You got the cookies!");
});

app.get("/read-cookies", (req, res) => {
  const cookies = req.cookies;
  res.json(cookies);
});
*/
