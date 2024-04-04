// Mehsur filmlerin movcud oldugu bir api url tapin.
// O apiden istifade ederek,
// filmin adlarini console-da gosterin javascript:



fetch("https://api.themoviedb.org/3/movie/popular?api_key=9b9210b068aaca4bb4b7e8d00a540fa7")
  .then(res => res.json())
  .then(data => {
    let films = data.results;
    let filmAd = films.map(film => film.title);
    console.log(filmAd.join('\n'));
  });
