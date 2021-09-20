const path = require("path");

// Pass the exact path
console.log(path.dirname("C:/Users/gagan/Desktop/MERN/Node.txt"));
console.log(path.extname("C:/Users/gagan/Desktop/MERN/Node.txt"));
console.log(path.basename("C:/Users/gagan/Desktop/MERN/Node.txt"));
console.log(path.parse("C:/Users/gagan/Desktop/MERN/Node.txt"));


const myPath= path.parse("C:/Users/gagan/Desktop/MERN/Node.txt");
console.log(myPath.root);
console.log(myPath.name);
