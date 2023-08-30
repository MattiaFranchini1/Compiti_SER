const fs = require('fs')
var path = require('path');
let counter = 0

fs.readdir(process.argv[2], function leggi(err, data) {
    if (err) {
        //eccezione
        throw err
    }
    str = data.toString()
    str = str.split(",")
    //console.log(str)

    for (let i = 0; i < str.length; i++) {
        //console.log(path.extname(str[i]))
        if(path.extname(str[i]) == "." + process.argv[3]){
            console.log(str[i])
        }
    }

})




