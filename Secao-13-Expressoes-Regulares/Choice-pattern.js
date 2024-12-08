const reg = /\w+: (Heberton|Johnny|Maria)/; // Nome: nadsuasudi

console.log(reg.test("Nome: Heberton")); // true
console.log(reg.test("Nome: Josh")); // false
console.log(reg.test("Nome: Maria")); // true