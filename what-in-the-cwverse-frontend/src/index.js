console.log("Yoooo, we in here");

let userForm = document.querySelector("#user-form")
let inputs = document.querySelectorAll(".form-input")

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
<<<<<<< HEAD
          <img src="${this.image_url}">
=======
          <img src=${this.image_url}>
          <br><br>
>>>>>>> 16482af7590c5bfbd9906cfaf7946a15dd5943e8
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

  userForm.addEventListener("submit", function(e) {
    e.preventDefault()
    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({
        user: {
          email: inputs[0].value,
          password: inputs[1].value
        }
      })
    })
    .then(resp => resp.json())
    .then(data => obj = data)
    .then(() => console.log('Success:', obj))  });
