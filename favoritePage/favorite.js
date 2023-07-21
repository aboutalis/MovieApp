// Function to get the favorites array from localStorage
function getFavoritesFromLocalStorage() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites;
}

// Function to display favorite movies on the favorite.html page
function displayFavorites() {
    const favorites = getFavoritesFromLocalStorage();
    const container = document.querySelector('.grid-cont');
    const favoriteContainer = document.querySelector(".favorite-cont");

    // Clear any existing content in the container
    container.innerHTML = '';

    // Loop through the favorites array and create grid-items for each favorite movie
    favorites.forEach(movieId => {
        const apiURL = `https://www.omdbapi.com/?i=${movieId}&apikey=30b59238`;
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');

                const poster = document.createElement('img');
                poster.src = (data.Poster !== "N/A") ? data.Poster : "../images/logo.png";
                poster.alt = "poster";

                poster.addEventListener('click', () => {
                    displayFavoriteDetails(movieId); // Call the function to display details
                });

                const title = document.createElement('h3');
                title.classList.add('title');
                title.textContent = data.Title;

                gridItem.appendChild(poster);
                gridItem.appendChild(title);
                container.appendChild(gridItem);
            })
            .catch(error => console.log("Error fetching movie details:", error));
    });
}

function displayFavoriteDetails(movieId) {
    localStorage.setItem('movieId', movieId);
    window.location.href = '../detailPage/detail.html';
}

function redirectToFavoritePage() {
    window.location.href = "favorite.html";
}

favoriteContainer.addEventListener("click", redirectToFavoritePage);
displayFavorites();