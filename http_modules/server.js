const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome Kishan soni");
        res.end();
    } else if (req.url === "/about") {
        res.write("This is the About Page");
        res.end();
    } else if (req.url === "/contact") {
        res.write("Contact us at: kishan@example.com");
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" }); // 404 status
        res.write("404 Not Found");
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
