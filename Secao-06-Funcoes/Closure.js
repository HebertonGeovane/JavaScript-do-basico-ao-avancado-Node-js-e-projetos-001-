function lembrarSoma (x) {
    return function (y) {
        return x + y 

    }
}

let soma1 = lembrarSoma (2); // 12
console.log(soma1(10))

let soma2 = lembrarSoma (4); // 14
console.log(soma2(10))


function contador(i) {
    let cont = i;
    let somaContador = function () {
        console.log(cont);
        cont++;
    };
    return somaContador;
}

let meuContador = contador(10);
meuContador(); // 10
meuContador(); // 11