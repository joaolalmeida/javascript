function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0) /*somar numeros dentro de um array */
}

console.log(sum(32,5,74,7,1,9,90))