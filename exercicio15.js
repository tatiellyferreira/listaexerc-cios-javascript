/*
===========================================================
Exercício 15 - Sequência de Fibonacci (10 primeiros)
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======


let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();
let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
  console.log(a);
  [a, b] = [b, a + b];
}