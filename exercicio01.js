/*
===========================================================
Exercício 01 - Verifica se o número é par ou ímpar
Duas versões abaixo:
1. Versão com número já definido no código (sem precisar digitar nada)
2. Versão que pede o número ao usuário (usando o prompt-sync)
===========================================================
*/

// ======= Versão 1: Número já definido no código =======
let numero = 7; // você pode trocar esse valor para testar outros números

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}

// ======= Versão 2: Usuário digita o número no terminal =======
const prompt = require('prompt-sync')(); // importa o pacote para entrada via teclado

let numeroDigitado = Number(prompt("Digite um número inteiro: "));

if (numeroDigitado % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}
