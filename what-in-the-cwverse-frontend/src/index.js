console.log("Yoooo, we in here");

class Character {
  constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.alias = data.alias;
      this.known_for = data.known_for;
      this.powerstats = data.powerstats;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getShows();
  getCharacters();
  renderShows();
  renderCharacters();
})

function getCharacters() {
  fetch("http://localhost:3000/characters")
  .then(resp => resp.json())
  .then(data => renderCharacters(data))
}

Character.prototype.displayCharacters = function() {
  return `<div>
          <h4>${this.alias}</h4><br>
          <p>${this.name}</p>
          <p> Powers:
            ${this.powerstats} 
          </p> 
          <p>${this.known_for}</p>
      </div>`
}

function renderCharacters(data) {
  let allCharacters = document.getElementById("all-characters")
  data.forEach((character) => {
    let newCharacter = new Character(character)
    allCharacters.innerHTML += newCharacter.displayCharacters()
  });
}