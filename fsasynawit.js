const fs = require("fs");
const path = require("path");

const filename = "fsAsync.txt";
const filepath = path.join(__dirname, filename);

// Using async/await with try-catch to read file content
// const readFile = async () => {
//     try {
//         const data = await fs.promises.readFile(filepath, "utf-8");
//         console.log("File content:", data);
//     } catch (error) {
//         console.error("Error reading file:", error);
//     }
// };

// readFile();

 // Change this to the folder you want to read

const readFolder = async () => {
    try {
        const files = await fs.promises.readdir(folderPath); // Read directory contents
        console.log("Files in folder:", files);
    } catch (error) {
        console.error("Error reading folder:", error);
    }
};

readFolder();
