let number = prompt("Escolha um número para mostrar a sua tabuada")
number = parseFloat(number)
let tot = ""

for (let i = 1; i <= 20; i++) {
    soma = number * i
    tot += (`${number} * ${i} = ${soma} \n`)
}
    alert(`${tot}`)