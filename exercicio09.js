/*
===========================================================
Exercício 09 - Contagem regressiva de 10 até 1
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======


for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();
for (let i = 10; i >= 1; i--) {
  console.log(i);
}