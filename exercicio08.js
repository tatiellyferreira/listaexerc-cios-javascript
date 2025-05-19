/*
===========================================================
Exercício 08 - Ordem crescente de dois valores
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let valor1 = 9, valor2 = 4;

if (valor1 < valor2) {
  console.log(valor1, valor2);
} else {
  console.log(valor2, valor1);
}

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();
let v1 = Number(prompt("Digite o primeiro valor: "));
let v2 = Number(prompt("Digite o segundo valor: "));
if (v1 < v2) {
  console.log(v1, v2);
} else {
  console.log(v2, v1);
}