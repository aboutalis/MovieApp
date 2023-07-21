const autocompleteBox = document.getElementById('autocomplete-box'),
    inputField = document.querySelector('.search-cont input'),
    favoriteContainer = document.querySelector(".favorite-cont");

const apiKey = "30b59238";

async function loadMovies(searchMovies) {
    let page = 1;
    const allMovies = []; // Array to store all movies from all pages
  
    while (true) {
      const apiURL = `https://www.omdbapi.com/?s=${searchMovies}&page=${page}&apikey=${apiKey}`;
      const response = await fetch(apiURL);
      const data = await response.json();
  
      if (data.Response === "True") {
        allMovies.push(...data.Search);
        page++; // Move to the next page for the next iteration
      } else {
        // No more results, exit the loop
        break;
      }
    }
  
    if (allMovies.length > 0) {
      displayMovies(allMovies);
    }
  }

function findMovies(){
    let searchMovies = (inputField.value);
    // console.log(searchMovies);
    if(searchMovies.length > 0){
        autocompleteBox.classList.remove('hide');
        loadMovies(searchMovies);
    }else{
        autocompleteBox.classList.add('hide');
    }
}

function displayMovies(movies) {
    autocompleteBox.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
        let liItems = document.createElement('li');

        liItems.dataset.id = movies[i].imdbID;

        if (movies[i].Poster != "N/A")
            moviePoster = movies[i].Poster;
        else
            moviePoster = "images/logo.png";

        // Cut the title if it's longer than 45 characters
        const movieTitle = movies[i].Title;

        liItems.innerHTML = `
            <div class="poster">
                <img src="${moviePoster}">
            </div>
            <div class="details">
                <h3>${movieTitle}</h3>
                <p>${movies[i].Year}</p>
            </div>
        `;
        autocompleteBox.appendChild(liItems);
    }
    getMovieID();
}

function getMovieID(){
    const getMovieList = autocompleteBox.querySelectorAll('li');
    getMovieList.forEach(movie => {
        movie.addEventListener('click', async() =>{
            console.log(movie.dataset.id);
            const movieId = movie.dataset.id;
            console.log(movieId);
            localStorage.setItem('movieId', movieId);
            window.location.href = `detailPage/detail.html`;
        });
    });
}

function redirectToFavoritePage() {
    window.location.href = "favoritePage/favorite.html";
}

favoriteContainer.addEventListener("click", redirectToFavoritePage);

