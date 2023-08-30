var net = require('net');
net.createServer(function (socket){
	var date = new Date();
	var date = date.getFullYear() + "-" + riempi_zeri(date.getMonth() + 1) + "-" + riempi_zeri(date.getDate()) + " " + riempi_zeri(date.getHours()) + ":" + riempi_zeri(date.getMinutes()) + "\n";
	socket.write(date);
    socket.end()
}).listen(process.argv[2]);


function riempi_zeri(n) {
    if(n<10){
        n = '0'+n
    }
    return n
}