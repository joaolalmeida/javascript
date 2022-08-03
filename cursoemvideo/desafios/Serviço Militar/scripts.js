var anoTeste = new Date()
var anoAtual = anoTeste.getFullYear()
function calcular() {
    var txtn = document.querySelector('input#txtnum')
    var res = document.querySelector('div#res')
    var ano = Number(txtn.value)
    var idade = anoAtual - ano
    var alista = ano + 18
    var dif
    if (idade == 18) {
        res.innerHTML = `Você completa 18 anos nesse ano de  ${alista}`
    } else if (idade < 18) {
        res.innerHTML = `<p>Você ainda não completou 18 anos. Vai acontecer em ${alista}</p>`
        dif = alista - anoAtual
        res.innerHTML += `Ainda falta(m) ${dif} ano(s)`
    } else {
        res.innerHTML = `<p>Você já deveria ter se alistado em ${alista}</p>`
        dif = anoAtual - alista
        res.innerHTML += `<p>Você já está atrasado ${dif} ano(s)</p>`
    }
}