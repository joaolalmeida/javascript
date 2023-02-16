import calculate from "./calculate.js"
import copyToClipBoard from "./copyToClipBoard.js"
import { handClearButton, handleButtonPress, handTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

document.querySelectorAll('.charKey').forEach(function (charkeyBtn) {
  charkeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', handClearButton)
document.getElementById('input').addEventListener('keydown', handTyping)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById("copyToClipboard").addEventListener("click", copyToClipBoard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)

