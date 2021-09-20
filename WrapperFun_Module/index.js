// grouping operator ke ander anonymous function

// IIFE in js  and module wrapper in nodejs

(function (exports, require, module, __filename, __dirname) {
  const a = require("fs");
  const name = "gagan";
  console.log(name);
  module.exports = { gaga };
});

// IIFE
(function () {
  var a = "Gagan";
  console.log(a);
})();

// Data inside this is private beacause of IFFE
