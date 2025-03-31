const fs = require("fs");
const path = require("path");

const filename = "fsmodulestext.txt"; // Ensure the file exists
const filepath = path.join(__dirname, filename); // Get file path

try {
    // Read the file content
    let fileContent = fs.readFileSync(filepath, "utf-8");

    // Define the text/line you want to remove
    const textToRemove = "Delete this line.";

    // Remove the specific line
    let updatedContent = fileContent
        .split("\n") // Split content by lines
        .filter(line => line.trim() !== textToRemove) // Remove matching line
        .join("\n"); // Join back into string

    // Write updated content back to the file
    fs.writeFileSync(filepath, updatedContent, "utf-8");

    console.log("Specified data removed successfully!");
} catch (error) {
    console.error("Error modifying file:", error.message);
}
