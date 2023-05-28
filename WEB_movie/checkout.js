const main = document.querySelector("#main");
const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";

checkout();

function checkout() {
  const seat = localStorage.getItem("seat");

  const movie = JSON.parse(localStorage.getItem("movie"));

  const { title,  poster_path } = movie;


  main.innerHTML = `
  <div class="ticket">
  <div class="ticket-header">
    <h1>Movie Ticket</h1>
  </div>
  <div class="ticket-body">
    <div class="movie-info">
      <img src=${IMG_PATH+poster_path} alt="Movie Poster">
      <h2>${title}</h2>
    </div>
    <div class="seat-info">
      <p>Seat: <span class="seat-number">${seat}</span></p>
    </div>
  </div>
  <div class="ticket-footer">
    <p>Enjoy the movie!</p>
  </div>
</div>

  `;
}
