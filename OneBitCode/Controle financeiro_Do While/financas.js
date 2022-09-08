let saldo = prompt("Informe a quantidade de dinheiro inicial:")
saldo = parseFloat(saldo) //pode ser colocado o parseFloat na declaração da variavel ou depois
let opcao = ""

do {
    opcao = prompt(
        "Saldo disponivel: R$ " + saldo +
        "\n1. Adicionar dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat ( prompt("Informe o valor a ser adicionado:")) //Opcional parseFloat ja foi declarado no inicio do codigo
            break
        case "2":
            saldo -= prompt ("Informe o valor a ser removido:")   
            break
        case "3":
            alert("Saindo...")    
            break
        default:
            alert("Entrada inválida!")    
    }
} while (opcao !== "3")