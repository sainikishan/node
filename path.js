const path = require("path");

console.log(__dirname);
console.log(__filename);

// add path using collect data school/follder/student/data.txt  
const filePath = path.join("folder", "students", "data.txt");
console.log(filePath);
// parse


const pasedata = path.parse(filePath);
const resolveddata = path.resolve(filePath);
const extdata = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);
console.log({ dirname, basename, extdata, resolveddata, pasedata });
