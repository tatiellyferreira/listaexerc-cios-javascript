/*
===========================================================
Exercício 12 - Tabuada de um número
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let numero = 7;

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite um número para ver a tabuada: "));
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}