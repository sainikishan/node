//   c r u d
// synchronous and asynchronous
// Promise
// usingsynchronous
// for create a file and update file
const fs = require('fs');
const path = require('path');
const filename = "fsmodulestext";
const filepath = path.join(__dirname, filename);
console.log(__dirname);
const writeFIle =
    fs.writeFileSync(filepath, "update kishan kuamr saini new work in nodesjs", 'utf-8');
console.log(writeFIle);
// end for create a file
