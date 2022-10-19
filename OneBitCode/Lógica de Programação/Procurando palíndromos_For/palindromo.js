let word = prompt(`Digite uma palavra:`)
let inverted = "" 

for (let i = word.length -1; i >= 0 ; i--) {
    inverted += word[i] 
}
if (inverted == word) {
    alert(`${word} digitada é um palindromo.`)
} else {
    alert(`${word} não é um palindromo.\n`
    + `Palavra Digitada: ${word}\nPalavra Invertida: ${inverted}`)
}