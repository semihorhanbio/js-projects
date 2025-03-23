console.log("Node module explorer demo");

console.log("__filename in wrapper explorer", __filename);
console.log("__dirname in wrapper explorer", __dirname);

module.exports.greet = (name) => console.log(`Hello ${name}`);
