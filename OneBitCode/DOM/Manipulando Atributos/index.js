const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = input.value === '' ? 'Olá, mundo!' : ''

  console.log(input.value)
  console.log(input.getAttribute('value'))
})

// Trocar o tipo do input
document.getElementById('type').addEventListener('click', function () {
  input.type = input.type !== 'date' ? 'date' : 'text'
})

//place holder
document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = 'Digite algo'
})

//disable

document.getElementById('disable').addEventListener('click', function () {
  input.setAttribute('disabled', !input.disable)
})

//data-something-else

document.getElementById('data').addEventListener('click', function () {
  const data = input.dataset.somethingElse
  console.log("O valor do atributo " + data)
  input.dataset.somethingElse = 'algum outro valor'
  console.log("O valor do atributo data-someting-else agora é: " + input.dataset.somethingElse)
})