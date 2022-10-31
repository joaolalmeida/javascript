//No javascript, através da função show() que será executada ao clicar no botão, podemos obter um elemento do   DOM através do id:

function show() {
  // Obter um elemento único a partir do seu id
  const contactList = document.getElementById("contact-list")
  console.log(contactList)

  //Também podemos obter elementos a partir de um nome de tag:
  const listElements = document.getElementsByTagName("li")
  console.log(listElements)


}

