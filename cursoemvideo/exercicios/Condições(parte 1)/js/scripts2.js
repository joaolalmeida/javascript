function calcular() {
    var txtp = document.querySelector('input#txtpais')
    var res = document.querySelector('div#res')
    var pais = (txtp.value)
    res.innerHTML = `<p>Vivendo em ${pais}</p>`
    if (pais == "brasil") {
        res.innerHTML += `<p>Você é Brasileiro</p>`
    } else {
        res.innerHTML += `<p>Você é Estrangeiro</p>`
    }
}