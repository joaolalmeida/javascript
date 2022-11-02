function addPlayer() {
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  const confirmation = confirm("Escalar " + name + " como " + position + "?")

  if (confirmation) {
    const teamList = document.getElementById('teamList')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + number
    playerItem.innerText = position + ": " + name + "(" + number + ")"
    teamList.appendChild(playerItem)
  }
}