const fs = require("fs");
const path = require("path");
const filename = "fsAsync.txt";

const filepath = path.join(__dirname, filename);

//syntax: fs.writefile(path,data,option,callback);
fs.writeFile(filepath, "this is the inital data", "utf-8", (err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log("file created");
    }
});
//read file
fs.readFile(filepath,  "utf-8", (err,data) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(data);
    }
});
//update file
fs.appendFile(filepath, "\nthis is a update data", "utf-8", (err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log("data will be update");
    }
});
//delete file
fs.unlink(filepath,(err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log("data will be delete");
    }
});


