/*
===========================================================
Exercício 06 - Tipo de triângulo
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let a = 5, b = 5, c = 5;

if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c) {
    console.log("Triângulo Equilátero");
  } else if (a === b || a === c || b === c) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Não forma um triângulo");
}

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();
let a2 = Number(prompt("Lado A: "));
let b2 = Number(prompt("Lado B: "));
let c2 = Number(prompt("Lado C: "));
if (a2 < b2 + c2 && b2 < a2 + c2 && c2 < a2 + b2) {
  if (a2 === b2 && b2 === c2) {
    console.log("Triângulo Equilátero");
  } else if (a2 === b2 || a2 === c2 || b2 === c2) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Não forma um triângulo");
}