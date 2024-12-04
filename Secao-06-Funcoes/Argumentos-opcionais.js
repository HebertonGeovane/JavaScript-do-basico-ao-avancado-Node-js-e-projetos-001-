function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log("Essa Função precisa ter dois argumentos");
    }else{
        return a + b;
    }
}

console.log(soma(1)); // Essa Função precisa ter dois argumentos

console.log(soma(1,5)); // 6

function saudacao(nome, idade) {
    if (idade === undefined) {
        console.log(" Olá " + nome);
    }else{
        console.log(" Olá "  + nome + " voce tem "  + idade + " anos ");
    }
}

saudacao("Heberton"); // Olá Heberton

saudacao("Heberton" ,  39); //  Olá Heberton voce tem 39 anos 
