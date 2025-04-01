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
fs.promises.writeFile(filepath, "this is use promises new", "utf-8")
    .then((data)=>console.log(data))
    .catch((err) => console.log(err));
//read 


    fs.promises.readFile(filepath, "utf-8")
    .then((data) => {
        console.log("File content:", data);  // Logs the file content
    })
    .catch((err) => {
        console.error("Error handling:", err);  // Logs the error if file reading fails
    });
