const lodash = require("lodash");

const names = ["john", "Doe", "jane", "Alex"];
const capitializedNames = lodash.map(names, lodash.capitalize);
console.log(capitializedNames);
