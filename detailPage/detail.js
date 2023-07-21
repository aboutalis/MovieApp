const movieId = localStorage.getItem('movieId'),
    infoCont = document.querySelector('.container');


// Load movie details and display them
async function loadMovieById() {
    const apiURL = `https://www.omdbapi.com/?i=${movieId}&apikey=30b59238`;
    const response = await fetch(apiURL);
    const data = await response.json();
    const favoriteContainer = document.querySelector(".favorite-cont");
    displayDetails(data);
}

function displayDetails(details) {
    // localStorage.removeItem('favorites');
    // console.log("Favorites list cleared.");

    infoCont.innerHTML = `
    <div class="poster-cont">
        <img src="${(details.Poster != "N/A") ? details.Poster : "../images/logo.png"}" alt="movie poster">
        <button class="add-fav" onclick="addToFavoriteList('${movieId}')">Add to favorite</button>
    </div>
    <div class="info-cont">
        <h1>${details.Title}</h1>
        <p>Genre: ${details.Genre}</p>
        <p>Writer: ${details.Writer}</p>
        <p>Actors: ${details.Actors}</p>
        <p>Plot: ${details.Plot}</p>
        <p>Awards: ${details.Awards}</p>
    </div>
    `;
}

function addToFavoriteList(movieId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (!favorites.includes(movieId)) {
        favorites.push(movieId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    window.location.href = '../favoritePage/favorite.html';
}

function redirectToFavoritePage() {
    window.location.href = "../favoritePage/favorite.html";
}

favoriteContainer.addEventListener("click", redirectToFavoritePage);

loadMovieById();
