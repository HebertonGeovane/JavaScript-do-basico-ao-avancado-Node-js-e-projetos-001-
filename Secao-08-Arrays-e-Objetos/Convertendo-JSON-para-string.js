let pessoa = {
    "nome": "Heberton",
    "idade": 39,
    "profissao": "Programador",
    "hobbies": ["Ouvir música", "Leitura", "Skate"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
console.log(pessoaTexto.nome); // undefined

/* 
{ "nome":"Heberton",
  "idade":39,
  "profissao":"Programador",
  "hobbies":["Ouvir música","Leitura","Skate"]
}
*/

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

/* 
Object { nome: "Heberton", idade: 39, profissao: "Programador", hobbies: (3) […] }
​hobbies: Array(3) [ "Ouvir música", "Leitura", "Skate" ]
0: "Ouvir música"
​​1: "Leitura"
​​2: "Skate"
length: 3
​idade: 39
​nome: "Heberton"
​profissao: "Programador"
*/

console.log(pessoaJSON.hobbies[0]);

// Ouvir música