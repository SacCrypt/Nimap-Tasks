var app = require("express")()

var http = require("http").Server(app)

var path = require("path")

app.get("/", (req, res) => {
    var option = {
        root: path.join(__dirname)
    }
    var fileName = 'index.html'
    res.sendFile(fileName, option)

})

var io = require("socket.io")(http)

io.on('connection', (socket) => {
    console.log("Connection received")
    socket.on('disconnect', ()=>{
        console.log("Disconnected");
    })
})
http.listen(3000, ()=>{
    console.log("server ready");
})