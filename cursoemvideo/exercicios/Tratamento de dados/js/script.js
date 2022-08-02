var nome = window.prompt("Qual é o seu nome?"); //vai perguntar o nome ...
alert("É um grande prazer em te conhecer, " + nome + "!"); // sinal de + é uma concatenação ...
document.write(
  `<p class="teste">Olá ${nome}! Seu nome tem ${nome.length} letras</p>`
); //   write é escreva no caso (escreva no documento)
document.write(
  `<p class="teste">Seu nome em maiúsculo é ${nome.toUpperCase()}</p>`
); // escrever tudo em MAIÚSCULO
document.write(
  `<p class="teste">Seu nome em minúsculas é ${nome.toLowerCase()}</p>`
);
var n1 = Number(window.prompt("qual é o seu número favorito?"));
var n2 = Number(window.prompt(`agora fale um outro número!`));
var n3 = n1 / n2;
var n4 = n2 / n1;

document.write(`Operações com o número ${n1}! <br/>`);
document.write(`<br/>`);

document.write(`Seu número favorito somado a ele mesmo é ${n1 + n1}! <br/>`);
document.write(`Seu número favorito vezes ele mesmo é ${n1 * n1}! <br/>`);
document.write(`Seu número favorito elevado a ele mesmo é ${n1 ** n1}! <br/>`);

document.write(`<br/>`);

document.write(`Operações com o número ${n2}! <br/>`);
document.write(`<br/>`);

document.write(`Seu outro número somado a ele mesmo é ${n2 + n2}! <br/>`);
document.write(`Seu outro número vezes ele mesmo é ${n2 * n2}! <br/>`);
document.write(`Seu outro número elevado a ele mesmo é ${n2 ** n2}! <br/>`);

document.write(`<br/>`);

document.write(`Operações com os números ${n1} e ${n2}! <br/>`);
document.write(`<br/>`);

document.write(
  `Seu número favorito  mais o outro número que você digitou antes é ${
    n1 + n2
  } <br/>`
);
document.write(`Seu número favortio menos o outro número é ${n1 - n2} <br/>`);
document.write(
  `Seu outro número menos o seu número favorito é ${n2 - n1} <br/>`
);
document.write(`Seu número favorito vezes o outro número é ${n1 * n2} <br/>`);
document.write(
  `Seu outro número vezes o seu número favorito é ${n2 * n1} <br/>`
);
document.write(
  `Seu número favorito dividido pelo seu outro número é ${n3.toFixed(2)} <br/>`
);
document.write(
  `Seu número outro número dividido pelo seu número favorito é ${n4.toFixed(
    2
  )} <br/>`
);
document.write(
  `Seu número favorito elevado ao seu outro número é ${n1 ** n2} <br/>`
);
document.write(
  `Seu outro número elevado ao seu número favorito é ${n2 ** n1} <br/>`
);
