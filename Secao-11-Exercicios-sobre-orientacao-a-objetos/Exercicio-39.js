class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km) {
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(l) {
        this.gasolinaRestante += l;
    }
}

let carro = new Carro("VW", "Cinza", 100, 14);
console.log(carro);

/* 
Object { marca: "VW", cor: "Cinza", gasolinaRestante: 100, consumo: 14 }
​
consumo: 14
​
cor: "Cinza"
​
gasolinaRestante: 102.85714285714286
​
marca: "VW"
*/

carro.dirigir(100);
console.log(carro);

/*
Object { marca: "VW", cor: "Cinza", gasolinaRestante: 92.85714285714286, consumo: 14 }
​
consumo: 14
​
cor: "Cinza"
​
gasolinaRestante: 102.85714285714286
​
marca: "VW"

*/

carro.abastecer(10);
console.log(carro);

/*
Object { marca: "VW", cor: "Cinza", gasolinaRestante: 102.85714285714286, consumo: 14 }
​
consumo: 14
​
cor: "Cinza"
​
gasolinaRestante: 102.85714285714286
​
marca: "VW"

*/