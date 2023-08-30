const fs = require('fs')
let counter = 0

let buffer = fs.readFileSync(process.argv[2])
str = buffer.toString()

str = str.split("\n")

for(let i=0;i<str.length;i++){
    counter++
}

console.log(counter-1)