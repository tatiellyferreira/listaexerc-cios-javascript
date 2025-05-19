/*
===========================================================
Exercício 07 - Custo de maçãs
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let quantidade = 13;

let preco = quantidade < 12 ? 0.30 : 0.25;
let total = quantidade * preco;
console.log("Total a pagar: R$", total.toFixed(2));

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();
let qtd = Number(prompt("Digite a quantidade de maçãs: "));
let preco2 = qtd < 12 ? 0.30 : 0.25;
let total2 = qtd * preco2;
console.log("Total a pagar: R$", total2.toFixed(2));