const path = require("path");

console.log("Directory name: ", path.dirname(__filename));
console.log("File name: ", path.basename(__filename));
console.log("File extension: ", path.extname(__filename));

const joinedPath = path.join(__dirname, "test", "hello.html");
console.log("Joined path: ", joinedPath);

const resolvedPath = path.resolve(__dirname, "test", "hello.html");
console.log("Resolved path: ", resolvedPath);

const normalizedPath = path.normalize(__dirname + "/test/hello.html");
console.log("Normalized path: ", normalizedPath);
