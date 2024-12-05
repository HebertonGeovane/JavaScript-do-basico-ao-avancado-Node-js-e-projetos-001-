let pessoa = {
    nome: "Heberton"
};

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Heberton"
};

console.log(pessoa == pessoa2) // true
console.log(pessoa3 == pessoa) // false
console.log(pessoa3 == pessoa2)// false

pessoa2.nome = "Johnny";
console.log(pessoa.nome); // Johnny

pessoa.nome = "Maria";
console.log(pessoa2.nome); // Maria