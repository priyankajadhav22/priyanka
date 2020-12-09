var http = require("http");
var fs = require("fs");
var url = require("url");
var onCreateServer = function (req, res) {
	var pathname = url.parse(req.url).pathname;
	fs.readFile(pathname.substr(1), function (err, data) {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data.toString());
		res.end();
	});
};

var server = http.createServer(onCreateServer);
server.listen(8081);
console.log("server running on 8081");
