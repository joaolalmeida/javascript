function addContact() {
  const contactSection = document.querySelector("#contacts-list")

  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'

  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = 'Nome: '
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)


  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)


  const adressLi = document.createElement('li')
  adressLi.innerHTML = '<label for="adress">Endereço: </label>'
  const adressInput = document.createElement('input')
  adressInput.type = 'text'
  adressInput.name = 'adress'
  adressInput.id = 'adress'
  adressLi.appendChild(adressInput)

  contactSection.append(h3, ul)
}