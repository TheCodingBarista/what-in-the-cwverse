class Show {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.characters = data.characters;
        this.image_url = data.image_url;
    }
}

function getShows() {
    fetch("http://localhost:3000/shows")
    .then(resp => resp.json())
    .then(data => renderShows(data))
    //.then(data => console.log(data))
  }
  
  Show.prototype.displayCharacters = function() {
    let allCharacters = this.characters.map(character => {
      return (`<div id="${character.id}">
          <h4>${character.alias}</h4><br>
          <p>${character.name}</p>
   
          <p> Powers:
            ${character.powerstats} 
          </p> 
          <p>${character.known_for}</p>
      </div>`)
    }).join('')

    return (allCharacters)
  }

  Show.prototype.displayShow = function() {
    return `<div class="show-card column">
            <h4 class="show-title">${this.title}</h4><br></br>
            <img src="${this.image_url}">
            <br><br>
            <p style="font-size:12px;">${this.description}</p><br></br>
            <button onClick="">Meet the Characters</button>
            <div id="show-characters">
            </div>
          </div>`
  }

  function renderShows(data) {
    let showsIndex = document.getElementById("all-shows")
    data.forEach((show) => {
      console.log(show)
      let newShow = new Show(show)
      showsIndex.innerHTML += newShow.displayShow()
    });
  }
