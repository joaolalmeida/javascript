const boardRegions = document.querySelectorAll("#gameBoard span")
const vBoard = []
let turnPlayer = "dd"

function updateTitle() {
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById("turnPlayer").innerText = playerInput.value
}

function initializeGame() {
  vBoard = [["", "", ""], ["", "", ""][("", "", "")]]
  turnPlayer = 'player1'
  document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
  updateTitle()
  boardRegions.forEach(function (element) {
    element.classList.remove('win')
  })
}

