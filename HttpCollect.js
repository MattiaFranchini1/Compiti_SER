var http = require('http');

http.get(process.argv[2], function(response){
    var ret = new Array();

    response.on("data", function(data){
        ret+=data.toString();
    });
    response.on("end", function(){
        console.log(ret.length);
        console.log(ret);
    });
}).on("error",function(e){
    console.log(e);
});