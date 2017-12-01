var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	response.write("Hello World :D");
	response.end();
}).listen(8080, function(){
	console.log("Listening on port 8080");
});