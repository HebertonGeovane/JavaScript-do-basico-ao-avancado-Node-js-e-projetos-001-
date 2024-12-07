class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }

}

let endereco = new Endereco("Avenida Perimetral", "Distrito Triunfo", "Nova Olinda", "CE");
console.log(endereco);
/*
Object { rua: "Avenida Perimetral", bairro: "Distrito Triunfo", cidade: "Nova Olinda", estado: "CE" }
​
bairro: "Distrito Triunfo"
​
cidade: "Nova Olinda"
​
estado: "CE"
​
rua: "Avenida Perimetral"
}
*/

endereco.novaRua = "Avenida Perimetral";
console.log(endereco);
/*
Object { rua: "Avenida Perimetral", bairro: "Distrito Triunfo", cidade: "Nova Olinda", estado: "CE" }
​
bairro: "Distrito Triunfo"
​
cidade: "Nova Olinda"
​
estado: "CE"
​
rua: "Avenida Perimetral"
*/

endereco.novaCidade = "Nova Olinda";
console.log(endereco);
/*
Object { rua: "Avenida Perimetral", bairro: "Distrito Triunfo", cidade: "Nova Olinda", estado: "CE" }
​
bairro: "Distrito Triunfo"
​
cidade: "Nova Olinda"
​
estado: "CE"
​
rua: "Avenida Perimetral"
*/