/*       File System     */

let {readFile, writeFile} = require('fs');


readFile("arquivo.txt", "utf8", (error, text) => {
    if (error) {
        throw error;
    } else {
        console.log(text);
    }
})

writeFile("arquivo.txt", "Texto por Write File", (error) => {
    if (error) {
        throw error;
    } else {
        console.log("Escreveu com sucesso!");
    }
})

/*
node index.js
Escreveu com sucesso!
Texto por Write File
*/