let a = 0 // false

let b = null // false

const c = "Teste" // true

console.log(a || b || c)

console.log(a ?? b ?? c)

let a1 = 0

let b1 = a1 || 42 /* quando quiser colocar um atributo automatico quando o valor seja 0 */

console.log({ a1, b1})

b = a ?? 42 /* quando quiser colocar um atributo automatico quando o valor seja null */

console.log({a, b})