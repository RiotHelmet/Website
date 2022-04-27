// async function searchPopular() {
//   var url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

//   let response = await fetch(url);

//   let json = await response.json();
//   return json;
// }

// async function searchVideo(movie) {
//   let id = movie.id;
//   let key;
//   let response = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
//   );
//   let json = await response.json();
//   if (json.results.length > 0) {
//     key = json.results[0].key;
//     return key;
//   }
// }

// async function searchGenre(genreId) {
//   var url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

//   let response = await fetch(url);

//   let json = await response.json();
//   return json;
// }

// async function searchGenre(genreId) {
//   var url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

//   let response = await fetch(url);

//   let json = await response.json();
//   return json;
// }
