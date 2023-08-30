var http = require('http')
var map = require('through2-map')
var port = process.argv[2]

http.createServer(function (request, response) {
  if (request.method === 'POST') {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    request.pipe(map(function (chunk) {
	let testo = chunk.toString().toUpperCase()
      return testo
    })).pipe(response)
  } else {
    //console.log("Non è una post")
    response.writeHead(405)
  }
}).listen(+port, function () {
  //console.log('Server listening on http://localhost:%s', port)
})