const cron = require("node-cron")
const express = require("express")

const app = express()

app.listen(8080)

cron.schedule("* * * * *", () => {
    console.log("Cron Job Running at Intervals")
})