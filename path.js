const { dirname } = require("path");
const path = require("path");

console.log(path.dirname("C:/Users/97798/Downloads/JavaScript/Path/path.js"));

console.log(path.extname("C:/Users/97798/Downloads/JavaScript/Path/path.js"));

console.log(path.basename("C:/Users/97798/Downloads/JavaScript/Path/path.js"));

const newPath = path.parse("C:/Users/97798/Downloads/JavaScript/Path/path.js");

console.log(newPath.root);