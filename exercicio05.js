/*
===========================================================
Exercício 05 - Cálculo do IMC
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let peso = 70;
let altura = 1.75;
let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Baixo peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();

let peso2 = Number(prompt("Digite seu peso (kg): "));
let altura2 = Number(prompt("Digite sua altura (m): "));
let imc2 = peso2 / (altura2 * altura2);
if (imc2 < 18.5) {
  console.log("Baixo peso");
} else if (imc2 < 25) {
  console.log("Peso normal");
} else if (imc2 < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}