function addInput() {
  const ul = document.getElementById('inputs')

  const newLi = document.createElement('li') // Tag a ser criada
  newLi.className = 'list-item'
  newLi.innerText = 'Novo input: '

  const newInput = document.createElement('input')
  newInput.type = 'text'  // Type e name os tipos do input
  newInput.name = 'input'

  newLi.appendChild(newInput) //newLi é o elemento pai recebendo o newInput
  ul.appendChild(newLi)  // ul é o elemento pai 
}