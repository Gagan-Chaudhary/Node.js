// The http.createServer() method includes request and response parameters which is supplied by Node.js
// Eg. url, request header , and data

// The response object can be used to send a response for a current HTTP request

// If the repsonse from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:

const http = require("http");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/UserApi/userApi.json`, "utf-8");
const objData = JSON.parse(data);

const server = http.createServer((req, res) => {
  //   res.end("Hello from the server");
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("Welcome to Home page");
  } else if (req.url == "/about") {
    res.end("Welcome to About page");
  } else if (req.url == "/userapi") {
    // const x = fs.readFile('./UserApi/userApi.json',"utf-8",(err,data)=>{
    // const x = fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8",(err, data) => {
    //     console.log(data);
    //     const objData = JSON.parse(data);
    //     res.end(objData[0].name);
    //   }
    // );
    let ar=[];
    for (let index = 0; index < 6; index++) {
      console.log(objData[index].name);
      ar[index]=objData[index].name;
    }
    res.writeHead(200, { "Content-type": "application/json" });
    // res.end(ar);
    res.end(objData[2].name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Error! Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 8000");
});

// console.log(server);
