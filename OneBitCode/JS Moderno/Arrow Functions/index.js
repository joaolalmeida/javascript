function normalSum(a,b) {
  return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`) /*Soma normal: 4 */

/********************************/

const anonymousSum = function (a, b) {
  return a + b 
}

console.log(`Soma anônima: ${anonymousSum(2, 2)}`) /*Soma anônima: 4

/********************************/

const arrowSum = (a, b) => {
  return a + b
}

console.log(`Soma arrow function: ${arrowSum(2, 2)}`) /*SOma arrow function: 4 */

/********************************/

const subtract = (a, b) => a - b

console.log(`Subtração: ${subtract(5, 2)}`) /*Subtração: 3 */

/********************************/

const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21

console.log(double(number)) /* dobro de 21 é 42*/  /* Chamou a const double e dentro do parametro dela chamou a const number */

/********************************/

const towns = ['Prontera', 'Izlude', 'Paylon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P') /* Pegar a primeira letra do nome do array */

console.log(startingWithP) /* [ 'Pontera', 'Paylon' ] */