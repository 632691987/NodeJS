var http = require('http');
var util = require('util');
var url = require('url');

http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });

    //response.end(util.inspect(url.parse(request.url)));


    var _param = url.parse(request.url, true).query;
    response.write('a = ' + _param.a);
    response.write('\nb = ' + _param.b);
    response.end();

}).listen(8080);

console.log('5642 started');