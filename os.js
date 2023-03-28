const os = require('os');

console.log(os.arch());

const  freespace = os.freemem();
console.log(`${freespace/1024/1024/1024}`);

const  totalspace = os.totalmem();
console.log(`${totalspace/1024/1024/1024}`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());