const fs = require("fs"); // Import fs module
const path = require("path"); // Import path module

const filename = "fsmodulestext.txt"; // Ensure the file has an extension
const filepath = path.join(__dirname, filename); // Construct the file path

try {
    const dataToAppend = "\nThis is new appended data."; // Data to append

    // Append data to the file
    fs.appendFileSync(filepath, dataToAppend, "utf-8");

    console.log("Data appended successfully.");
} catch (error) {
    console.error("Error appending data:", error.message);
}
