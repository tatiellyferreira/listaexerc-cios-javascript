/*
===========================================================
Exercício 02 - Classificação de idade
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let idade = 30;

if (idade <= 12) {
  console.log("Criança");
} else if (idade <= 17) {
  console.log("Adolescente");
} else if (idade <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();

let idade2 = Number(prompt("Digite sua idade: "));
if (idade2 <= 12) {
  console.log("Criança");
} else if (idade2 <= 17) {
  console.log("Adolescente");
} else if (idade2 <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}