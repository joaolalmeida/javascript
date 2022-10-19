let pessoa = {
    nome: "Isaac",
    idade: 26,
    dizerOla() { //Atrelar uma função dentro do objeto 
        console.log("Olá, mundo! Meu nome é " + this.nome + ". Idade " + this.idade + " anos") //*this* é usado para referenciar o objeto
    }
}

console.log(pessoa)

pessoa.dizerOla()




