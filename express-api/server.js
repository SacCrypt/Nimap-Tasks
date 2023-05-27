const express = require("express");

const app = express();

const object = {};
const timeZoneArray = [
  "Europe/Amsterdam",
  "Asia/Calcutta",
  "Europe/London",
  "Asia/Dubai",
  "Australia/Hobart",
];
app.use(express.json());

app.use("/", (req, res) => {
  for (i = 0; i < timeZoneArray.length; i++) {
    object[timeZoneArray[i]] = new Date().toLocaleString("en-us", {
      timeZone: timeZoneArray[i],
    });
  }
  console.log(object);
  res.json(object);
});

app.listen(8080, () => {
  console.log("Sever is listening on port 8080");
});
