class Show {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        //this.characters = data.characters;
        this.image_url = data.image_url;
    }
}

function getShows() {
    fetch("http://localhost:3000/shows")
    .then(resp => resp.json())
    .then(data => renderShows(data))
  }
  
  Show.prototype.displayShow = function() {
    return `<div class="show-card column" id="${this.id}">
            <h4 class="show-title">${this.title}</h4><br></br>
            <img src="${this.image_url}">
            <br><br>
            <p style="font-size:12px;">${this.description}</p><br></br>
          </div>`
  }

  function renderShows(data) {
    let showsIndex = document.getElementById("all-shows")
    data.forEach((show) => {
      let newShow = new Show(show)
      showsIndex.innerHTML += newShow.displayShow()
    });
  }
