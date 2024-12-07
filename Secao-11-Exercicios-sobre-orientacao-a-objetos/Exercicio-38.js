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
Endereco {
    rua: 'Rua das Gaivotas',
        bairro: 'Terrário',
        cidade: 'São Joaquim',
        estado: 'SC'
}
*/

endereco.novaRua = "Avenida Perimetral";
console.log(endereco);
/*
Endereco {
    rua: 'Rua dos Pardais',
        bairro: 'Terrário',
        cidade: 'São Joaquim',
        estado: 'SC'
}
*/

endereco.novaCidade = "Nova Olinda";
console.log(endereco);
/*
Endereco {
    rua: 'Rua dos Pardais',
        bairro: 'Terrário',
        cidade: 'São Paulo',
        estado: 'SC'
}
*/