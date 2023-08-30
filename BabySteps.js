let numeri
let somma = 0
numeri = process.argv

for(let i=2;i<numeri.length;i++){
    //console.log(numeri[i])
    somma = parseInt(somma + parseInt(numeri[i]))
}

console.log(somma)