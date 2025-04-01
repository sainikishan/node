const fs = require("fs");
const { console } = require("inspector");
const path = require("path");
const filename = "fsAsync.txt";
const filepath = path.join(__dirname, filename);
//promises cehck directory
const file=__dirname
fs.promises
    .readdir(file)
    .then((data)=>console.log(data))
    .catch((err) => console.error(err));
//example
const fileName = __dirname;

fs.promises
    .readdir(fileName)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
// crud
fs.promises.writeFile(filename, "this is use promises", "utf-8")
    .then((data)=>console.log(data))
    .catch((err) => console.log(err));