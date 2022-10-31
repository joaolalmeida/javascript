//No javascript, através da função show() que será executada ao clicar no botão, podemos obter um elemento do   DOM através do id:

function show() {
  // Obter um elemento único a partir do seu id
  const contactList = document.getElementById("contact-list")
  console.log(contactList)

  //Também podemos obter elementos a partir de um nome de tag:
  const listElements = document.getElementsByTagName("li")
  console.log(listElements)

  // Obter vários elementos (HTMLCollection) a partir de uma classe
  const contactInputs = document.getElementsByClassName("contact-input")
  console.log(contactInputs)

  //  // Obter vários elementos (NodeList) a partir do atributo name
  const contact1 = document.getElementsByName("contact1")
  console.log(contact1)

  // E o método mais flexível de todos, através de uma query (semelhante ao que fazemos com o CSS):
  const contacts = document.querySelectorAll("#contact-list > li > label ")
  console.log(contacts)

  // Além disso, também é possível obter um único elemento através de uma query. O comportamento é igual ao do querySelectorAll(), porém selecionando o primeiro elemento que corresponder à query:
  // Obs.: Repare que também podemos acessar propriedade internas do elemento obtido.
  
  const contact = document.querySelector("#contact-list > li > label")
  console.log(contact)
  console.log(contact.textContent)
}

