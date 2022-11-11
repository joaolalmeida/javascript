
function register(ev) {
  console.log(ev)
  const usename = ev.currentTarget.children.usename
  const password = ev.currentTarget.children.password
  const usename = ev.currentTarget.children.usename
  
}
const button = document.getElementById('register-button')

button.addEventListener('click', register)
