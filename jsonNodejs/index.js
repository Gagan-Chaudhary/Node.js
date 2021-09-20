const fs = require("fs");
const bioData = {
  name: "Gagan",
  age: 26,
  pos: "developer",
};

const jsonData = JSON.stringify(bioData);

console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);

// 1. convert to json
// 2. add to another file
// 3. readfile
// 4. agagin convert back to js obj
// 5. console log

const jsonDataa = JSON.stringify(bioData);
const jsonfile = fs.writeFile("jsonfile.json", jsonData, (err) => {
  console.log("Done");
});

fs.readFile("jsonfile.json","utf-8", (err, data) => {
  console.log(data);
  const objd=JSON.parse(data);
  console.log(objd.name);
});
