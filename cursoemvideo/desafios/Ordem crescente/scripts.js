function calcular() {
    txtn1 = document.querySelector('input#txtnum1')
    txtn2 = document.querySelector('input#txtnum2')
    res = document.querySelector('div#res')
    var n1 = Number(txtnum1.value)
    var n2 = Number(txtnum2.value)
    res.innerHTML = `Testando ${n1} e ${n2}`
    if (n1 < n2) {
        res.innerHTML += `<p>Os números em ordem são ${n1} e ${n2}</p>`
    } else if (n1 > n2){
        res.innerHTML += `<p>Os números em ordem são ${n2} e ${n1}</p>`
    } else {
        res.innerHTML += `<p>Não tem como colocar esses valores em ordem. Eles são iguais!</p>`
    }
}