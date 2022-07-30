var n1 = Number.parseInt(window.prompt("Digite um número: ")); // string
var n2 = Number.parseInt(window.prompt("Digite outro número: ")); // string
var s = n1 + n2;
window.alert("A soma dos valores é " + s); // concatenação
// (number + numer) para adição
// (string + string) para concatenação

// Modo simplificado que o js decide qual dado está sendo inserido

var num1 = Number(prompt("Digite aqui um numero! "));
var num2 = Number(prompt("Digite aqui outro número! "));
var som = num1 + num2;
alert("A soma dos valores é " + som);
alert("A soma dos valores é " + String(som)); // transformando um number em uma string
alert(`A soma entre ${num1} e ${num2} é igual a ${som}`); // precisa utilizar crase `` para este modo
