console.log("Yoooo, we in here");

class Character {
  constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.image_url = data.image_url;
      this.alias = data.alias;
      this.known_for = data.known_for;
      this.powerstats = data.powerstats;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getShows();
  getCharacters();
})



function getCharacters() {
  fetch("http://localhost:3000/characters")
  .then(resp => resp.json())
  .then(data => renderCharacters(data))
}

Character.prototype.displayCharacters = function() {
  return `<div class="card column" id="${this.id}">
          <br><br>
          <h4>${this.alias}</h4><br>
          <img src=${this.image_url}>
          <br><br>
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

// function createUser() {

//   const user = {
//     email: document.getElementById('user-email').value,
//     password: document.getElementById('user-pwrd').value,
//   }

//   fetch("http://localhost:3000/users", {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
//   })
//   .then(resp => resp.json())
//   .then(data => obj = data)
//   .then(() => console.log('Success:', obj))
// }