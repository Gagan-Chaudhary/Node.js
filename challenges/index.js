const fs = require("fs");

fs.mkdirSync("gagan");

fs.writeFileSync("gagan/bio.txt","My name is Gagan")

fs.appendFileSync("gagan/bio.txt", "My name is Godl");

var v = fs.readFileSync("gagan/bio.txt", "utf-8");
console.log(v);

fs.renameSync("gagan/bio.txt", "gagan/mybio.txt");

fs.unlinkSync("gagan/mybio.txt");

fs.rmdirSync("gagan")
