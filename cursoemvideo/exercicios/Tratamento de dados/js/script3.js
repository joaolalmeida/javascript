var n1 = Number(prompt("Digite aqui um número! "));
var n2 = Number(prompt("Digite outro número!"));
var dis = Number(prompt("Digite uma distancia!"));

document.write(
  `O primeiro valor digitado foi *${n1}* e o segundo *${n2}* </br>`
);
document.write(`O maior valor digitado foi ${n1 > n2 ? n1 : n2}`);
document.write(
  `</br>O primeiro valor é ${n1 > n2 ? "Maior" : "Menor"} que o segundo valor`
);
document.write(`</br>O primeiro valor é ${n1 % 2 == 0 ? "Par" : "Impar"}`);
document.write(`</br>O segundo valor é ${n2 % 2 == 0 ? "Par" : "Impar"}</br>`);
document.write(
  `${
    n1 < 200
      ? "Uma viagem de " +
        dis +
        "Km vai custar R$0.5km </br> Valor total: R$" +
        dis * (0.5).toFixed(2) //para aparecer 2 números
      : "Uma viagem de " +
        dis +
        " vai custar R$0.35km </br> Valor total: R$" +
        dis * (0.25).toFixed(2)
  }`
);
