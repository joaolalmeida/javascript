function addContact() {
  const contactSection = document.querySelector("#contacts-list")

  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'

  const ul = document.createElement('ul')
  ul.style.listStyle = "none"
  ul.style.borderBottom = "2px solid white"

  const nameLi = document.createElement('li')
  nameLi.innerText = 'Nome: '
  const nameInput = document.createElement('input')
  nameInput.style.marginLeft = '16px'
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br')) //Pular uma linha

  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement("br"))

  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Endereço: </label>' //label permite selecionar o input clicando na palavra fora dele
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement("br"))

  contactSection.append(h3, ul) // igual o apprendChild mas usado para incluir varios elementos dentro
}

function removeContact() {
  const contactSection = document.querySelector('#contacts-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(titles[titles.length - 1]) //remover um nó(elemento)
  contactSection.removeChild(contacts[contacts.length -1]) // pegando o ultimo contato para remover
}