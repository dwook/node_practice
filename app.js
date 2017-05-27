/**
 * Created by dongwook on 2017. 5. 27..
 */



var fs = require('fs');
var http = require('http');
var url = require('url');
var request = require('request');


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log(filename);
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);


request('http://www.naver.com').pipe(fs.createWriteStream('naver.com'));
request('http://www.daum.net').pipe(fs.createWriteStream('daum.net'));

