var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    "Hello World! \n" +
      "<a href='https://google.com'>Test-link-1</a> \n" +
      "<a href='https://bang.se'>Test-link-2</a>"; //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
