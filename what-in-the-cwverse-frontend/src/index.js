console.log("Yoooo, we in here");

document.addEventListener('DOMContentLoaded', () => {
  //alert('This is a test');
  getShows();
  console.log('Test');
})

function getShows() {
  fetch("http://localhost:3000/shows")
  .then(resp => resp.json())
  .then(data => renderShows(data))
}

function renderShows(data) {
  let showsIndex = document.getElementById("all-shows")
  data.forEach((show) => {
    let newShow = new Show(show)
  })
}

