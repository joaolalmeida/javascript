function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.toLocaleTimeString() // função que transforma hora minutos e segundos
    //var hora = data.getHours()  
    //var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        // BOM DIA!
        img.src = 'img/manha.webp'
        document.body.style.background = '#D5C896'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = '../img/tarde.jpeg'
        document.body.style.background = '#B37F68'
    } else {
        // BOA NOITE
       // img.innerHTML = '<img src="../img/noite.jpeg">'
       img.src = '../img/noite.jpeg'
       document.body.style.background = '#0D2B2D'
    }
}
