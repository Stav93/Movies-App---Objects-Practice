const addMovieBtn = document.getElementById("add-movie-btn");
const serchBtn = document.getElementById("serch-btn");

const movies = [];

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
};

addMovieBtn.addEventListener("click", addMovieHandler)
