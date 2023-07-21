# Movie App

## Introduction

Welcome to the Movie App! This is a simple web application that allows users to search for movies by title, view detailed information about selected movies, and add their favorite movies. The app fetches movie data from the OMDb API, providing users with an interactive and enjoyable experience. Below, you will find detailed information about each script and the overall functionality of the application.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Scripts](#scripts)
  - [index.html](#indexhtml)
  - [style.css](#stylecss)
  - [script.js](#scriptjs)
  - [header.css](#headercss)
  - [detail.html](#detailhtml)
  - [detail.css](#detailcss)
  - [detail.js](#detailjs)
  - [favorite.html](#favoritehtml)
  - [favorite.css](#favoritecss)
  - [favorite.js](#favoritejs)
- [Acknowledgments](#acknowledgments)

## Overview

The Movie App is a responsive web application that allows users to search for movies, view detailed information about each movie, and add their favorite movies to a favorites list. The app uses the OMDb API to fetch movie data and displays it in a user-friendly manner. Here's a breakdown of its main features:

## Features

1. **Movie Search**: Users can enter a movie title in the search box to find relevant movie suggestions as they type.

2. **Autocomplete Suggestions**: The app provides autocomplete suggestions based on the user's input, helping them select the desired movie more efficiently.

3. **Movie Details**: Clicking on a movie from the search results navigates the user to a separate detail page, displaying comprehensive information about the movie, such as title, genre, writer, actors, plot, and awards.

4. **Favorite Movies**: Users can add movies to their favorites list by clicking the "Add to favorite" button on the detail page. The favorites are stored in the browser's local storage for easy access.

## Technologies Used

The Movie App is built using the following technologies:

- **HTML5**: The standard markup language for building the web app's structure.
- **CSS3**: Used for styling and formatting the user interface to create an attractive design.
- **JavaScript**: The programming language used for the app's interactivity, API communication, and local storage handling.

## Getting Started

To run the Movie App locally on your machine, follow these steps:

1. Open the `index.html` file in a web browser to access the movie search functionality.

2. Click on a movie from the search results to view its detailed information on the detail page.

3. Click on the favorite icon to add the movie to your favorites list.

4. Access the "Favorites" page by clicking on the star icon in the header to view your favorite movies.

## Usage

1. Open the web application in your web browser.

2. Enter a movie title in the search box to search for movies.

3. As you type, the app will display autocomplete suggestions for movie titles.

4. Click on the desired movie from the list to view more details on a separate detail page.

5. On the detail page, you can find information about the movie, including its title, genre, writer, actors, plot, and awards.

6. To add a movie to your favorites, click on the "Add to favorite" button on the detail page.

7. To view your favorite movies, click on the star icon in the header to navigate to the "Favorites" page.

## Scripts

### index.html

The `index.html` file is the main HTML page of the application. It contains the search box, autocomplete suggestions box, and the header with the logo and favorite icon. Users interact with this page to search for movies and access movie details.

### style.css

The `style.css` file is responsible for the overall styling of the application. It defines the layout, colors, and responsiveness of the user interface.

### script.js

The `script.js` file is the primary JavaScript file of the application. It handles the movie search functionality, autocomplete suggestions, and communication with the OMDb API to fetch movie data. This script also includes the functionality to navigate to the detail page and add movies to the favorites list.

### header.css

The `header.css` file styles the header section of the application, including the logo and favorite icon.

### detail.html

The `detail.html` file displays detailed information about a selected movie. It shows the movie poster, title, genre, writer, actors, plot, and awards. Users can add the movie to their favorites from this page.

### detail.css

The `detail.css` file styles the detail page, ensuring an attractive layout and readability of the movie details.

### detail.js

The `detail.js` file is responsible for loading and displaying the detailed information of the selected movie on the detail page. It communicates with the OMDb API to fetch the necessary data and handles the "Add to favorite" functionality.

### favorite.html

The `favorite.html` file displays the list of favorite movies. It shows the movie posters and titles of the user's favorite movies.

### favorite.css

The `favorite.css` file styles the "Favorites" page, providing an appealing presentation of the favorite movies grid.

### favorite.js

The `favorite.js` file handles the functionality of the "Favorites" page. It retrieves the favorite movies from local storage and displays them on the page. Users can click on a favorite movie to view its detailed information on the detail page.

## Acknowledgments

Special thanks to the developers of the OMDb API for providing the movie data used in this application.

### Search Scene:
<p align="center">
  <img src="https://github.com/aboutalis/MovieApp/assets/132292767/d8313d52-c35c-4ec9-978a-456f2de9220a" alt="startScene">
</p>

### Detail Scene:
<p align="center">
  <img src="https://github.com/aboutalis/MovieApp/assets/132292767/6937a87d-1a24-4c8c-a112-fe40d8a230af" alt="startScene">
</p>

### Favorite Scene:
<p align="center">
  <img src="https://github.com/aboutalis/MovieApp/assets/132292767/4fd693a0-1030-4f66-99ee-f40ec9a57a65" alt="startScene">
