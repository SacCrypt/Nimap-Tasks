const fs = require("node:fs");

fs.readFile(__dirname + "/misc/file1.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
