
let nome = "Heberton";

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3) {
        nome = "Johnny";
    }

    if(i == 5 && nome == "Johnny") {
        console.log("O nome é Johnny, pode parar");
        break;
    }

    console.log(i);

}

/*
0
1
2
3
4
O nome é Johnny, pode parar
*/