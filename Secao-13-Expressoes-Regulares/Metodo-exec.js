const digitos = /\d+/;

console.log(digitos.exec("Tem o número 100 aqui"));

/*

Array [ "100" ]
​
0: "100"
​
groups: undefined
​
index: 13
​
input: "Tem o número 100 aqui"
​
length: 1

*/

console.log(digitos.exec("Tem o número aqui"));

// null