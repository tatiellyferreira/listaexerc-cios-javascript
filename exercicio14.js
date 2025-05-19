/*
===========================================================
Exercício 14 - Fatorial de um número
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let numero = 5;

let resultado = 1;
for (let i = 2; i <= numero; i++) {
  resultado *= i;
}
console.log("Fatorial de", numero, "é", resultado);

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite um número: "));
let resultado = 1;
for (let i = 2; i <= numero; i++) {
  resultado *= i;
}
console.log("Fatorial de", numero, "é", resultado);