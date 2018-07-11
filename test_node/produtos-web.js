var http = require("http");

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url == "/produtos") {
        res.end("<html><body><h1>Listando os produtos da loja</h1></body></html>");
    } else {
        res.end("<html><body><h1>Home da casa do codigo</h1></body></html>");
    }
    console.log("Server running");
});
server.listen(3000);

