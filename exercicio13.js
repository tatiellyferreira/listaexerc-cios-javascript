/*
===========================================================
Exercício 13 - Média de números até digitar 0
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let lista = [4.5, 6.0, 7.5, 0];

let soma = 0;
let count = 0;
for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 0) break;
  soma += lista[i];
  count++;
}
let media = soma / count;
console.log("Média:", media);

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();
let soma = 0, count = 0;
while (true) {
  let valor = Number(prompt("Digite um número (0 para sair): "));
  if (valor === 0) break;
  soma += valor;
  count++;
}
let media = soma / count;
console.log("Média:", media);