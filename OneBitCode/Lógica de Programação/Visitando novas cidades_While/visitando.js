const nameTourist = prompt("Olá, qual o seu nome ?")
let traveled = prompt("Você já visitou alguma cidade? (sim/não)")
let cities = ""

while (traveled === "sim") {
    let citiesVisited = [prompt("Qual cidade você visitou")]
    traveled = prompt("Você visitou mais alguma cidade? (sim/não)")
    cities +=  ", " + citiesVisited
}

alert(`${nameTourist} você visitou algumas cidades entre elas estão${cities}`)