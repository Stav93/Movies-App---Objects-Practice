const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const displayingMovies = (filterTerm = "") => {
  const movieList = document.getElementById("movie-list");

  // the idile way is to not clear the html but append each new movie to the exiting elemnt

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filterdMovies = !filterTerm ? movies : movies.filter(movie => movie.info.title.includes(filterTerm))

  filterdMovies.forEach( movie => {
    const movieEl = document.createElement("li");
    // movieEl.textContent = movie.info.title;
    let movieInfo = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        movieInfo = movieInfo + `${key}: ${movie.info[key]}`
      }
    }
    movieEl.textContent = movieInfo;
    movieList.append(movieEl);
  })

}

const addMovieHandler = () => {
  const titleValue = document.getElementById("title").value;
  const extraNameValue = document.getElementById("extra-name").value;
  const extraValueValue = document.getElementById("extra-value").value;

  if (
    titleValue === "" ||
    extraNameValue === "" || extraValueValue === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title: titleValue,
      [extraNameValue]: extraValueValue
    },
    id: Math.random()
  }

  movies.push(newMovie)
  displayingMovies()
};

const serchMovieHandler = () => {
  const filterInput = document.getElementById("filter-title").value;
  displayingMovies(filterInput)
}

addMovieBtn.addEventListener("click", addMovieHandler)
searchBtn.addEventListener("click", serchMovieHandler)
