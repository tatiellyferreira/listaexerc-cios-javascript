/*
===========================================================
Exercício 03 - Classificação de nota
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let nota = 6.5;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();

let nota2 = Number(prompt("Digite sua nota: "));
if (nota2 >= 7) {
  console.log("Aprovado");
} else if (nota2 >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}