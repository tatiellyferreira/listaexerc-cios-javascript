/*
===========================================================
Exercício 04 - Menu interativo
Duas versões abaixo:
1. Versão com valor já definido no código
2. Versão que pede o valor ao usuário (usando prompt-sync)
===========================================================
*/

// ======= Versão 1: Valor já definido no código =======
let opcao = 2;

switch (opcao) {
  case 1:
    console.log("Opção 1 selecionada");
    break;
  case 2:
    console.log("Opção 2 selecionada");
    break;
  case 3:
    console.log("Opção 3 selecionada");
    break;
  default:
    console.log("Opção inválida");
}

// ======= Versão 2: Usuário digita no terminal =======
const prompt = require('prompt-sync')();

let opcao2 = Number(prompt("Digite uma opção (1, 2 ou 3): "));
switch (opcao2) {
  case 1:
    console.log("Opção 1 selecionada");
    break;
  case 2:
    console.log("Opção 2 selecionada");
    break;
  case 3:
    console.log("Opção 3 selecionada");
    break;
  default:
    console.log("Opção inválida");
}