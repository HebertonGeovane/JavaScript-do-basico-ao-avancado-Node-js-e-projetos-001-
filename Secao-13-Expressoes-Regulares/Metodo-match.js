const frase = "O número 100 está aqui".match(/\d+/);
const frase2 = "O número está aqui".match(/\d+/);

console.log(frase);

/*

Array [ "100" ]
​
0: "100"
​
groups: undefined
​
index: 9
​
input: "O número 100 está aqui"
​
length: 1

*/
console.log(frase2);

// null