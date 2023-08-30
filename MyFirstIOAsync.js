const fs = require('fs')
let counter = 0

fs.readFile(process.argv[2], function leggi(err, data) {
    if (err) {
        //eccezione
        throw err
    }
    str = data.toString()

    str = str.split("\n")

    for (let i = 0; i < str.length; i++) {
        counter++
    }

    console.log(counter - 1)
})




