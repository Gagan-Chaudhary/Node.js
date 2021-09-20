// REPL
// 1: js expression
// 2: use variables
// 3: multiline code
// 4: use (_) to get last result
// 5: we can use editor mode

const fs = require("fs");
// file system

// creating a new file
fs.writeFileSync("read.txt", "Welcome to Godl");
fs.writeFileSync("read.txt", "Welcome to Godl Paaji");

// Append data in file 
fs.appendFileSync("read.txt"," GGG")

// Read data in file 
console.log(fs.readFileSync("read.txt"));
console.log(fs.readFileSync("read.txt").toString());
fs.readFileSync("read.txt","utf-8")

// Rename file 
fs.renameSync("read.txt","gagan.txt")
fs.renameSync("gagan.txt","read.txt")