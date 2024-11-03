async function getData(query) {
    //Fetch response from OMDb API, convert to JSON if good
    const url = `http://www.omdbapi.com/?s=${query}&apikey=ae4f07db`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
            
        const json = await response.json();
        return json;
        
    } catch (error) {
            console.error(error.message);
            return [];
    }
}

async function getDataID(id) {
    //Fetch response from OMDb API, convert to JSON if good
    const url = `http://www.omdbapi.com/?i=${id}&apikey=ae4f07db`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
            
        const json = await response.json();
        return json;
        
    } catch (error) {
            console.error(error.message);
            return [];
    }
}

async function populateData() {
    let input = document.getElementById('searchbar').value; //Take user search
    input = input.toLowerCase();

    let data = await getData(input);
    let movieList = document.getElementById('movie-list'); //List of movies returned from API

    movieList.innerHTML = '';
    if (data.Search && data.Search.length > 0) {
        data.Search.forEach(movie => { //Take each movie, make a list element with the movie poster and the title
            const listItem = document.createElement("li");
            listItem.classList.add("movie-item");

            const posterImg = document.createElement("img");
            posterImg.src = movie.Poster !== "N/A" ? movie.Poster : "../images/no-image-icon.png";
            posterImg.alt = `${movie.Title} poster`;
            posterImg.classList.add("movie-poster");

            const titleText = document.createElement("p");
            titleText.textContent = movie.Title;
            titleText.classList.add("movie-title");

            listItem.addEventListener('click', async () => { //Add event listener for clicking poster/title
                const details = await getDataID(movie.imdbID);
                scrollToBottom();
                showMovieDetails(details);
            });

            listItem.appendChild(posterImg);
            listItem.appendChild(titleText);
            movieList.appendChild(listItem);
        });
    } else {
        movieList.innerHTML = `<li>No movies found</li>`;
    }
}

function toggleDetails(imdbID) { //Click poster for more details
    let detailsElement = document.getElementById(`details-${imdbID}`);
    if (detailsElement.style.display === 'none' || detailsElement.style.display === '') {
        detailsElement.style.display = 'block';
    } else {
        detailsElement.style.display = 'none';
    }
}

function showMovieDetails(details) { //List of details
    const detailsContainer = document.getElementById('movie-details');
    detailsContainer.innerHTML = `
        <h2>${details.Title}</h2>
        <img src="${details.Poster !== "N/A" ? details.Poster : "../images/no-image-icon.png"}" alt="${details.Title} poster">
        <p><strong>Director:</strong> ${details.Director}</p>
        <p><strong>Cast:</strong> ${details.Actors}</p>
        <p><strong>Plot:</strong> ${details.Plot}</p>
        <p><strong>Rating:</strong> ${details.imdbRating}</p>
        <p><strong>Released:</strong> ${details.Released}</p>
        <p><strong>Genre:</strong> ${details.Genre}</p>
        <p><strong>Runtime:</strong> ${details.Runtime}</p>
        <button class="movie-list-button" id="movie-list-button" >Add to My List</button>
    `;

    const listMovies = document.createElement("dt");
    document.getElementById("movie-list-button").addEventListener('click', async () => { //Add event listener for clicking "Add to List" button
        addToList(listMovies, details);
    });
}

function scrollToBottom(timedelay=0) {
    var scrollId;
    var height = 800; //Height to scroll to
    var minScrollHeight = 10; //Scroll speed
    scrollId = setInterval(function () {
        if (height <= document.body.scrollHeight) {
            window.scrollBy(0, minScrollHeight);
        }
        else {
            clearInterval(scrollId);
        }
        height += minScrollHeight;
    }, timedelay);           
}

function addToList(listMovies, details) {
    const personalMovie = document.createElement("dt");
    personalMovie.textContent = details.Title;

    const movieGenre = document.createElement("dd");
    movieGenre.textContent = details.Genre;

    const movieDirector = document.createElement("dd");
    movieDirector.textContent = details.Director;

    personalMovie.appendChild(movieDirector);
    personalMovie.appendChild(movieGenre);
    listMovies.appendChild(personalMovie);
}

//Input for search triggers movie search
document.getElementById('searchbar').addEventListener('input', async () => {
    await populateData(); 
});

document.getElementById("my-movies-button").addEventListener('click', async () => { //Use to show list of personal movies, and show recommended (Another page?)

});