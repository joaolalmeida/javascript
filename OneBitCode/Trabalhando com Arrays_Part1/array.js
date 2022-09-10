const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar Elementos
// push

let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift

tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

//********************************************* 

// Remover Elementos
// pop

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//***********************************************

// Pesquisar por um Elemento
//includes

const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexof

const indice = arr.indexOf("Gandalf")
console.log(indice)

//**************************************************

// Cortar e Concatenar
// slice    *** Uma cópia para trabalhar com segurança

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-2)
console.log(arr)
console.log(hobbits)
console.log(outros)

