var i = 0;
let apiKey = "1a08c634ec1bc9d64558c15c3e88cdbf";
let MovieInfoList = [];

async function getMovies() {
  // Movie Genre Ids

  // Action          28
  // Adventure       12
  // Animation       16
  // Comedy          35
  // Crime           80
  // Documentary     99
  // Drama           18
  // Family          10751
  // Fantasy         14
  // History         36
  // Horror          27
  // Music           10402
  // Mystery         9648
  // Romance         10749
  // Science Fiction 878
  // TV Movie        10770
  // Thriller        53
  // War             10752
  // Western         37

  let resPop = await searchPopular();
  let resAction = shuffle((await searchGenre(28)).results);
  let resHorror = shuffle((await searchGenre(27)).results);
  let resComedy = shuffle((await searchGenre(35)).results);
  let resThriller = shuffle((await searchGenre(53)).results);
  document.getElementById("slide").innerHTML += `
    <div class="slideText">
    <h2>${resPop.results[0].title}</h2>
    <div class="slideButtons"> 
    <div class="slidePlay" ><i class="fa-solid fa-circle-play"></i> Play Title </div> 
    <div class="slideInfo" id="${i}" onclick="moreInfo(this)" > <i class="fa-solid fa-circle-info"></i> More Info </div> 
    </div>
    </div>
    <img src="https://image.tmdb.org/t/p/original${resPop.results[0].backdrop_path}" class="slideFilm">`;
  resPop.results.forEach(async (Object) => {
    key = await searchVideo(Object);
    MovieInfoList.push({
      id: Object.id,
      title: Object.title,
      overview: Object.overview,
      vote_average: Object.vote_average,
      poster_path: Object.poster_path,
      backdrop_path: Object.backdrop_path,
      key: key,
      genre: Object.genre_ids,
    });
    document.getElementById(
      "popular"
    ).innerHTML += `<div class="filmDiv" onmouseover="loadVideo(this)" id="${i}">
    <img src="https://image.tmdb.org/t/p/w500${Object.poster_path}" class="film">
        <div class="filmHover">
        <h1>${Object.title}</h1>

        <div class="overlay">
        <ul>
        <li><i class="fa-solid fa-circle-play"></i></li>
        <li><div>${Object.vote_average}</div></li>
        <li onclick="moreInfo(this)" id="${i}"><i class="fa-solid fa-circle-info"></i></li>
        </ul>
        </div>
        <div class="frame-container" id="frame${i}">
        </div>
        </div>
        </div>`;
    i++;
  });

  resAction.forEach(async (Object) => {
    key = await searchVideo(Object);
    MovieInfoList.push({
      id: Object.id,
      title: Object.title,
      overview: Object.overview,
      vote_average: Object.vote_average,
      poster_path: Object.poster_path,
      backdrop_path: Object.backdrop_path,
      key: key,
      genre: Object.genre_ids,
    });
    document.getElementById(
      "action"
    ).innerHTML += `<div class="filmDiv" onmouseover="loadVideo(this)" id="${i}">
    <img src="https://image.tmdb.org/t/p/w500${Object.poster_path}" class="film">
        <div class="filmHover">
        <h1>${Object.title}</h1>
        <div class="overlay">
        <ul>
        <li><i class="fa-solid fa-circle-play"></i></li>
        <li><div>${Object.vote_average}</div></li>
        <li onclick="moreInfo(this)" id="${i}"><i class="fa-solid fa-circle-info"></i></li>
        </ul>
        </div>
        <div class="frame-container" id="frame${i}">
        </div>
        </div>
        </div>`;
    i++;
  });

  resComedy.forEach(async (Object) => {
    key = await searchVideo(Object);
    MovieInfoList.push({
      id: Object.id,
      title: Object.title,
      overview: Object.overview,
      vote_average: Object.vote_average,
      poster_path: Object.poster_path,
      backdrop_path: Object.backdrop_path,
      key: key,
      genre: Object.genre_ids,
    });
    document.getElementById(
      "comedy"
    ).innerHTML += `<div class="filmDiv" onmouseover="loadVideo(this)" id="${i}">
    <img src="https://image.tmdb.org/t/p/w500${Object.poster_path}" class="film">
        <div class="filmHover">
        <h1>${Object.title}</h1>
        <div class="overlay">
        <ul>
        <li><i class="fa-solid fa-circle-play"></i></li>
        <li><div>${Object.vote_average}</div></li>
        <li onclick="moreInfo(this)" id="${i}"><i class="fa-solid fa-circle-info"></i></li>
        </ul>
        </div>
        <div class="frame-container" id="frame${i}">
        </div>
        </div>
        </div>`;
    i++;
  });
  resHorror.forEach(async (Object) => {
    key = await searchVideo(Object);
    MovieInfoList.push({
      id: Object.id,
      title: Object.title,
      overview: Object.overview,
      vote_average: Object.vote_average,
      poster_path: Object.poster_path,
      backdrop_path: Object.backdrop_path,
      key: key,
      genre: Object.genre_ids,
    });
    document.getElementById(
      "horror"
    ).innerHTML += `<div class="filmDiv" onmouseover="loadVideo(this)" id="${i}">
    <img src="https://image.tmdb.org/t/p/w500${Object.poster_path}" class="film">
        <div class="filmHover">
        <h1>${Object.title}</h1>
        <div class="overlay">
        <ul>
        <li><i class="fa-solid fa-circle-play"></i></li>
        <li><div>${Object.vote_average}</div></li>
        <li onclick="moreInfo(this)" id="${i}"><i class="fa-solid fa-circle-info"></i></li>
        </ul>
        </div>
        <div class="frame-container" id="frame${i}">
        </div>
        </div>
        </div>`;
    i++;
  });
  resThriller.forEach(async (Object) => {
    key = await searchVideo(Object);
    MovieInfoList.push({
      id: Object.id,
      title: Object.title,
      overview: Object.overview,
      vote_average: Object.vote_average,
      poster_path: Object.poster_path,
      backdrop_path: Object.backdrop_path,
      key: key,
      genre: Object.genre_ids,
    });
    document.getElementById(
      "thriller"
    ).innerHTML += `<div class="filmDiv" onmouseover="loadVideo(this)" id="${i}">
    <img src="https://image.tmdb.org/t/p/w500${Object.poster_path}" class="film">
        <div class="filmHover">
        <h1>${Object.title}</h1>
        <div class="overlay">
        <ul>
        <li><i class="fa-solid fa-circle-play"></i></li>
        <li><div>${Object.vote_average}</div></li>
        <li onclick="moreInfo(this)" id="${i}"><i class="fa-solid fa-circle-info"></i></li>
        </ul>
        </div>
        <div class="frame-container" id="frame${i}">
        </div>
        </div>
        </div>`;
    i++;
  });
}

async function searchPopular() {
  var url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

  let response = await fetch(url);

  let json = await response.json();
  return json;
}

async function searchVideo(movie) {
  let id = movie.id;
  let key;
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
  );
  let json = await response.json();
  if (json.results.length > 0) {
    key = json.results[0].key;
    return key;
  }
}

async function searchGenre(genreId) {
  var url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

  let response = await fetch(url);

  let json = await response.json();
  return json;
}

getMovies();

function loadVideo(Object) {
  if (document.getElementById(`frame${Object.id}`).innerHTML.trim() == "") {
    if (MovieInfoList[Object.id].key !== undefined) {
      document.getElementById(
        `frame${Object.id}`
      ).innerHTML = `<iframe width="420" height="345" src="https://www.youtube.com/embed/${
        MovieInfoList[Object.id].key
      }?autoplay=1&mute=1&loop=1&playlist=${MovieInfoList[Object.id].key}">`;
    } else {
      document.getElementById(
        `frame${Object.id}`
      ).innerHTML = `<img src="https://image.tmdb.org/t/p/original${
        MovieInfoList[Object.id].backdrop_path
      }">`;
    }
  }
}

function moreInfo(Object) {
  document.getElementById("infoImg").innerHTML = "";
  document.getElementById("infoText").innerHTML = "";
  document.getElementById("similarContainer").innerHTML = "";
  document.getElementById("infoAlign").scrollTo(0, 0);
  let infoPage = document.getElementById("infoPage");
  infoPage.style.display = "inline-block";
  document.getElementById("infoAlign").style.display = "flex";
  document.getElementById("infoClose").style.display = "block";
  document.body.style.overflowY = "hidden";
  let infoId = Object.id;
  console.log(infoId);
  document.getElementById("infoImg").innerHTML += `
  <div id="infoShadow"></div>
  <img src="https://image.tmdb.org/t/p/original${MovieInfoList[infoId].backdrop_path}">
    <div class="infoBox">
    <h1>${MovieInfoList[infoId].title}</h1>
    <div class="infoButtons">
    <div class="infoPlay">
      <i class="fa-solid fa-circle-play"></i> Play Title
    </div>
    </div>
    </div>`;
  document.getElementById("infoText").innerHTML += `
  <p>${MovieInfoList[infoId].overview}</p>
  `;
  let similarTitles = loadSimilar(
    MovieInfoList[infoId].genre,
    MovieInfoList[infoId].title
  );

  similarTitles.forEach((Index) => {
    document.getElementById("similarContainer").innerHTML += `
      <div class="similarMovieDiv" id="${MovieInfoList.indexOf(
        Index
      )}" onclick="moreInfo(this)">
        <img src="https://image.tmdb.org/t/p/original${
          MovieInfoList[MovieInfoList.indexOf(Index)].poster_path
        }">
      </div>`;
  });
}

function closeInfo() {
  document.getElementById("infoAlign").style.display = "none";
  document.body.style.overflowY = "scroll";
  document.getElementById("infoPage").style.display = "none";
  document.getElementById("infoClose").style.display = "none";
}

function loadSimilar(genreIds, title) {
  let resultArray = [];
  let returnArray = [];
  MovieInfoList.forEach((Movie) => {
    Movie.genre.forEach((genre) => {
      if (genreIds.includes(genre) === true) {
        if (Movie.title !== title) {
          if (resultArray.includes(Movie) === false) {
            resultArray.push(Movie);
          }
        }
      }
    });
  });

  resultArray = shuffle(resultArray);
  for (let i = 0; i < 8; i++) {
    returnArray.push(resultArray[i]);
  }
  return returnArray;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
