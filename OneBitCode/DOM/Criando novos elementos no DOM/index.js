function addInput() {
  const ul = document.querySelector('#inputs')

  const newLi = document.createElement('li') // Tag a ser criada
  newLi.className = 'list-item'  // nome da classe do li criado
  newLi.innerText = 'Novo input: '  // Nome do texto que sera escrito no li

  const newInput = document.createElement('input')
  newInput.type = 'text'  // Type e name os tipos do input
  newInput.name = 'input'
  newInput.id = 'newInputCreated' // criando uma id para o input
  newInput.placeholder = 'Escreva aqui' // Texto dentro do input
  newInput.style.width = "300px" // largura do input
  newInput.style.margin = "10px" // margin entre os inputs
  newInput.style.background = "lightgreen" // cor do input


  newLi.appendChild(newInput) //newLi é o elemento pai recebendo o newInput
  ul.appendChild(newLi)  // ul é o elemento pai 
}