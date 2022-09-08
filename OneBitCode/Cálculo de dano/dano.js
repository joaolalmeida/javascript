const attacker = prompt("Qual o nome do personagem atacante?")
const powerAttack = prompt("Qual é o seu poder de ataque?")

const defender = prompt("Qual é o nome do personagem defensor?")
let healthPoints = prompt("Quantos pontos de vida ele possui?")
const defensePower = prompt("Qual é o seu poder de defesa?")
const hasShield = prompt("Ele possui um escudo? (Sim/Não)")

let damageDone = 0

if (powerAttack > defensePower && hasShield === "Não") {
    damageDone = powerAttack - defensePower
} else if (powerAttack > defensePower && hasShield === "Sim") {
    damageDone = (powerAttack - defensePower) / 2
}
healthPoints -= damageDone 

alert(attacker + " causou " + damageDone + " pontos de dano em " + defender)
alert(
    attacker + "\nPoder de ataque: " + powerAttack + "\n\n" +
    defender + "\nPontos de vida: " + healthPoints +
    "\nPoder de defesa: " + defensePower + "\nPossui escudo: " + hasShield 
)