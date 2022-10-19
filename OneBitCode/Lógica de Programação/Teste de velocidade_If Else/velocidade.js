const firstvehicle = prompt("Digite o nome do primeiro veículo")
const firstvelocity = prompt("Digite a Velocidade do veículo")
const secondvehicle = prompt("Digite o nome do segundo veículo")
const secondvelocity = prompt("Digite a velocidade do veículo")

if (firstvelocity > secondvelocity) {
    alert(`O veículo ${firstvehicle} é mais rapido com velocidade de ${firstvelocity}Km/h`)
} else if (firstvelocity < secondvelocity) {
    alert(`O veículo ${secondvehicle} é mais rápido com velocidade de ${secondvelocity}Km/h`)
} else {
    alert(`Os dois veículos estão ná mesma velocidade de ${secondvelocity}Km/h`)
}