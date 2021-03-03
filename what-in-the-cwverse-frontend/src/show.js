class Show {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
    }
}

function getShows() {
    fetch("http://localhost:3000/shows")
    .then(resp => resp.json())
    .then(data => renderShows(data))
    //.then(data => console.log(data))
  }
  
  Show.prototype.displayShow = function() {
    return `<div class="show-card">
            <h4 class="show-title">${this.title}</h4><br></br>
            <p>${this.description}</p><br></br>
          </div>`
  }
  
  function renderShows(data) {
    let showsIndex = document.getElementById("all-shows")
    data.forEach((show) => {
      let newShow = new Show(show)
      showsIndex.innerHTML += newShow.displayShow()
    });
  }
