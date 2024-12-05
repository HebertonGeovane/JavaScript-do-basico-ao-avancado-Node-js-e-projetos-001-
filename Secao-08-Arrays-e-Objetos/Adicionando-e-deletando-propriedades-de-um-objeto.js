let pessoa = {
    nome: "Heberton",
    idade: 39,
    profissao: "programador"
}
console.log(pessoa); // Object { nome: "Heberton", idade: 39, profissao: "programador" }
delete pessoa.nome;
console.log(pessoa); // Object { idade: 39, profissao: "programador" }
pessoa.casada = false;
console.log(pessoa); // Object { idade: 39, profissao: "programador", casada: false }