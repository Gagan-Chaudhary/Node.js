const os = require("os");

console.log(os.arch());
console.log(os.freemem());

const freemem = os.freemem();
const totalmem = os.totalmem();

console.log(`${freemem/1024/1024/1024}`);
console.log(`${totalmem/1024/1024/1024}`);

console.log(os.hostname());
console.log(os.platform());