function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0) /*somar numeros dentro de um array */
}

console.log(sum(1,5,2,6))