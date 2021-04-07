console.log("Yoooo, we in here");

let userForm = document.querySelector("#user-form")
let inputs = document.querySelectorAll(".form-input")
let currentUser
let allCharacters = document.getElementById("all-characters")
let favorites = document.querySelector("#user-favorites")
let likeButton = document.querySelector(".like-button")
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
          <img src="${this.image_url}">
          <br><br>
          <p>${this.name}</p>
          <p> Powers:
            ${this.powerstats} 
          </p> 
          <p>${this.known_for}</p>
      </div>`
}

function renderCharacters(data) {
  data.forEach((character) => {
    let newCharacter = new Character(character)
    allCharacters.innerHTML += newCharacter.displayCharacters()
  });
}

  userForm.addEventListener("submit", function(e) {
    e.preventDefault()
    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: inputs[0].value,
          password: inputs[1].value
        }
      })
    })
    .then(resp => resp.json())
    .then(console.log("Success"))
    .then(data => isLoggedIn(data))
    })
  
  function isLoggedIn(object){
    currentUser = object
    getFavorites();
  }

  function getFavorites(){
      fetch("http://localhost:3000/users/(${currentUser}.id)/favorites")
      .then(resp => resp.json())
      .then(favs => displayFavorites(favs))
    }

  function displayFavorites(favs){
    favorites.innerHTML = `<h2>My Favorites</h2>`
    favs.forEach(favorite => {
      `<div class="show-card column" id="${this.id}">
      <h4 class="show-title">${this.title}</h4><br></br>
      <img src="${this.image_url}">
      <br><br>
      <p style="font-size:12px;">${this.description}</p><br></br>
      <button fav-show-id=${favorite.show.id} class="like-button" style="color:red;">♡</button>
      </div>`
    })
  }