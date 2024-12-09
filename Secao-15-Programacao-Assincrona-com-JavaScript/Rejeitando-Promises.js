function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log(`O numero é ${num}`));
        }else{
            reject(new Error('falhou... numeor errado'));
        }
    });
}

verificarNumero(2)
verificarNumero(3)

/*
O numero é 2
Uncaught (in promise) Error: falhou... numeor errado
verificarNumero http://127.0.0.1:5500/Secao-15-Programacao-Assincrona-com-JavaScript/Rejeitando-Promises.js:6
    verificarNumero http://127.0.0.1:5500/Secao-15-Programacao-Assincrona-com-JavaScript/Rejeitando-Promises.js:2
    <anonymous> http://127.0.0.1:5500/Secao-15-Programacao-Assincrona-com-JavaScript/Rejeitando-Promises.js:12
*/