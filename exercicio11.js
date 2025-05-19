/*
===========================================================
Exercício 11 - Soma de 5 números
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let numeros = [2, 4, 6, 8, 10];

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma:", soma);

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();
let soma = 0;
for (let i = 0; i < 5; i++) {
  soma += Number(prompt(`Digite o número ${i+1}: `));
}
console.log("Soma:", soma);