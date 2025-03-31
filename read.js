const fs = require("fs");  // Import fs module first
const path = require("path");  // Import path module 

const filename = "fsmodulestext.txt"; // Ensure the file has an extension
const filepath = path.join(__dirname, filename); // Construct the file path

try {
    const readfile = fs.readFileSync(filepath, "utf-8"); // Read with UTF-8 encoding
    console.log("File content:", readfile); // Display file content
} catch (error) {
    console.error("Error reading file:", error.message); // Handle file read errors
}
