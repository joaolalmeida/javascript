const meter = prompt("Digite um valor em Metros!")
const measure = prompt(`Escolha uma unidade de medida! \n mm) milímitro \n cm) centímetro \n dm) decímetro \n dam) decâmetro \n hm) hectômetro \n km) quilômetro `)

const mm = meter * 1000
const cm = meter * 100
const dm = meter * 10
const dam =meter / 10
const hm = meter /100
const km = meter / 1000

switch (measure) {
    case "mm" :
        alert(`Convertendo ${meter} em mm o resultado é ${mm}`)
    brake
    case "cm" :
        alert(`Convertendo ${meter} em mm o resultado é ${cm}`)    
    brake
    case "dm" :
        alert(`Convertendo ${meter} em mm o resultado é ${dm}`)
    brake
    case "dam" :
        alert(`Convertendo ${meter} em mm o resultado é ${dam}`)
    brake
    case "hm" :
        alert(`Convertendo ${meter} em mm o resultado é ${hm}`)
    brake
    case "km" :
        alert(`Convertendo ${meter} em mm o resultado é ${km}`)
    brake
    default :
    alert("Opção Inválida") 
}