const fs = require("fs");

// fs.renameSync("index.js","paaji.js")

// fs.writeFile("read.txt", "Hello I am Gagan",(err)=>{
//     console.log("File is created");
// });
// fs.appendFile("read.txt", "Hello I am Gagan",(err)=>{
//     console.log("File is created");
// });

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});
