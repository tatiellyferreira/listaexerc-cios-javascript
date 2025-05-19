/*
===========================================================
Exercício 10 - Mostrar número 10 vezes
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let numero = 3;

for (let i = 0; i < 10; i++) {
  console.log(numero);
}

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();
let num = Number(prompt("Digite um número: "));
for (let i = 0; i < 10; i++) {
  console.log(num);
}