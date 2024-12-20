class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new Mamifero(4); // 4

console.log(coiote.patas);

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }

    latir() {
        console.log("Au au");
    }
}

let pug = new Cachorro(4, "Pug");

console.log(pug.patas);// 4

pug.latir(); // Au au

console.log(new Cachorro instanceof Mamifero);// true

console.log(coiote instanceof Mamifero);// true