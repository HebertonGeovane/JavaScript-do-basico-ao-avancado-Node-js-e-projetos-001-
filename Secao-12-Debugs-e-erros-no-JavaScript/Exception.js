function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error("o parâmetro nome precisa ser string");
    } else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Heberton");
saudacao(5);

// Exception.js:3
//         throw new Error("o parâmetro nome precisa ser string");
// Error: o parâmetro nome precisa ser string

console.log("teste");