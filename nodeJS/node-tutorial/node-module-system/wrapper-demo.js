const wrapperExplorer = require("./wrapper-explorer.js");
console.log("Node module wrapper demo");

console.log("__filename in wrapper explorer", __filename);
console.log("__dirname in wrapper explorer", __dirname);

wrapperExplorer.greet("John"); // Hello John
