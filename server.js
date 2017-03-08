var http = require('http');
var fs = require('fs')

var server = http.createServer(function(req,res){
  console.log(req.url);
  if(req.url=='/'){
    fs.readFile('./views/index.html', 'utf8', function(err,content){
      res.writeHead(200,{'Content-type':'text/html'});
      res.write(content);
      res.end();
    })
  }else if (req.url=="/default.css") {
    fs.readFile('./style/default.css', 'utf8', function(err,content){
      res.writeHead(200,{'Content-type':'text/css'});
      res.write(content);
      res.end();
    })
  }else if (req.url=="/about_me") {
    fs.readFile('./views/about.html', 'utf8', function(err,content){
      res.writeHead(200,{'Content-type':'text/html'});
      res.write(content);
      res.end();
    })
  }else if (req.url=="/portfolio"){
    fs.readFile('./views/portfolio.html', 'utf8', function(err,content){
      res.writeHead(200,{'Content-type':'text/html'});
      res.write(content);
      res.end();
    })
  }else if(req.url=="/contact"){
    fs.readFile('./views/contact.html', 'utf8', function(err,content){
      res.writeHead(200,{'Content-type':'text/html'});
      res.write(content);
      res.end();
    })
  }
})

server.listen(8000)
console.log("Server running");
