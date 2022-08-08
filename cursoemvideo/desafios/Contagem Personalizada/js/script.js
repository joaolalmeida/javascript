function verificar() {
    txtn1 = document.querySelector('input#txtnum1')
    txtn2 = document.querySelector('input#txtnum2')
    txtn3 = document.querySelector('input#txtnum3')
    res = document.querySelector('div#res')
    var n1 = Number(txtnum1.value)
    var n2 = Number(txtnum2.value)
    var n3 = Number(txtnum3.value)
    var c = n1
    while (c <= n2) {
        res.innerHTML += ` ${c}  `
    c += n3    
    }
}