function calcular() {
    var txtn1 = document.querySelector('input#txtnum1')
    var txtn2 = document.querySelector('input#txtnum2')
    var txt3 = document.querySelector('input#txtnum3')
    var res = document.querySelector('div#res')
    var n1 = Number(txtnum1.value)
    var n2 = Number(txtnum2.value)
    var n3 = Number(txtnum3.value)
    var maior
    var meio
    var menor
    if (n1 > n2) {
        if (n3 > n1) {
            maior = n3
            meio = n1
            menor = n2
        } else if (n3 > n2) {
            maior = n1
            meio = n3
            menor = n2
        } else {
            maior = n1
            meio = n2
            menor = n3
        }
        
    } else if (n3 > n2) {
        maior = n3
        meio = n2
        menor = n1   
    } else if (n3 > n1) {
        maior = n2
        meio = n3
        menor = n1
    } else {
        maior = n2
        meio = n1
        menor = n3
    }
    res.innerHTML = `Menor ${menor} , intermediario ${meio}, maior ${maior}`
}

