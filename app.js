/**
 * Created by dongwook on 2017. 5. 27..
 */



var fs = require('fs');
var http = require('http');
var url = require('url');
var request = require('request');


http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    var name = (q.pathname).substring(1);
    var filename = name+'.html';
    console.log(filename);

    request('http://www.'+name).pipe(fs.createWriteStream(filename));


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






