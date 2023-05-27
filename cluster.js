// Child processes same port, handle work load using worker threads.
const http = require("node:http");
const os = require("node:os");

console.log(os.cpus().length);
const cluster = require("node:cluster");
if (cluster.isMaster) {
  console.log(`Master Process ${process.pid}`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started `);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200), { "Content-Type": "text/plain" };
      res.end("Done");
    } else if (req.url === "/slowpage") {
      for (i = 0; i < 6000000; i++) {}
      res.writeHead(200);
      res.end("Done Loop");
    }
  });
  server.listen(8000, () => console.log("Server is running "));
}

//npm pm2
