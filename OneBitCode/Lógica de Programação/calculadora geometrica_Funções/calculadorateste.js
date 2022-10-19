    options = ""
    function triangulo() {
        let base = parseFloat(prompt("Qual o valor da base?"))
        let altura = parseFloat(prompt("Qual o valor da altura?"))
    
        return (base * altura) / 2
    }
    
    function retangulo() {
        let base = parseFloat(prompt("Qual o valor da base?"))
        let altura = parseFloat(prompt("Qual o valor da altura?"))
    
        return base * altura
    }
    
    function quadrado() {
        let lado = parseFloat(prompt("Qual o valor do lado?"))
    
        return lado * lado
    }
    
    function trapezio() {
        let baseMenor = parseFloat(prompt("Qual o valor da base menor?"))
        let baseMaior = parseFloat(prompt("Qual o valor da base maior?"))
        let altura = parseFloat(prompt("Qual o valor da altura"))
    
        return (baseMenor + baseMaior) * altura / 2
    }
    
    function circulo() {
        let raio = parseFloat(prompt("Qual o valor do circulo"))
        let pi = 3.14
    
        return pi * (raio * raio)
    }

    
    do {   

        options = prompt(
            "Olá, sou a calculadora geométrica!\n\nEscolha uma das opções:\n\n" +
              "1-Área do triângulo\n2-Área do retângulo\n3-Área do quadrado\n4-Área do trapézio\n5-Área do Círculo\n6-Sair"
          )

    
    switch (options) {
        case "1":
            let trianguloResultado = triangulo()
            alert("A área do triangulo é " + trianguloResultado)
            break
        case "2":
            let retanguloResultado = retangulo()
            alert("A área do retangulo é " + retanguloResultado)
            break
        case "3":
            let quadradoResultado = quadrado()
            alert("A área do quadrado é " + quadradoResultado)
            break
        case "4":
            let trapezioResultado = trapezio()
            alert("A área do trapezio é " + trapezioResultado)
            break
        case "5":
            let circuloResultado = circulo()
            alert("A área do circulo é " + circuloResultado)
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida")      
    }
    } while (options !== "6")