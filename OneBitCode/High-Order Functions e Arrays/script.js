const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map

const nomes = []
for (let i = 0; i < personagens.length; i++) {
    const personagem = personagens[i]
    nomes.push(personagem.nome)
}

// map
const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

// map: permite obter um novo array a partir de um array existenste

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})
console.log(nomes)


// Filter

const orcs = []

for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].raca === "Orc") {
        orcs.push(personagens[i])
    }
}

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente

const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})
console.log(orcs)


// Reduce

let nivelTotal = 0
for (let i = 0; i < personagens.length; i++) {
  nivelTotal += personagens[i].nivel
}

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel    
}, 0)

console.log(nivelTotal)


const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas)


// Sort

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos

personagems.sort(function (a, b) {
    return a.nivel - b.nivel
})

// usando sort sem alterar o array original e trocando a ordem crescente.

const personagensOrdenados = personagens.slice().sorte(function (a, b) {
    return b.nivel - a.nivel
})

console.log(personagens)
console.log(personagensOrdenados)
