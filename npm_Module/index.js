const chalk= require("chalk")
const validator= require("validator")

console.log(chalk.blue("Gagan Chaudhary"));
console.log(chalk.underline("Gagan Chaudhary"));
console.log(chalk.blue.inverse("Gagan Chaudhary"));
console.log(chalk.green.inverse("Success"));
console.log(chalk.red.inverse("Fail"));

console.log(validator.isEmail("gagan@gmail.com"));

const res= validator.isEmail("gagan@gmail.com");

console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));