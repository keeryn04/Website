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
    //Takes search bar input, fetches data, makes movie list
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();

    let data = await getData(input);
    let movieList = document.getElementById('movie-list');

    //Clears previous list and establishes list of movies
    movieList.innerHTML = '';
    if (data.Search.length > 0) {
        data.Search.forEach(async movie => {
            console.log(movie);
            let item = document.createElement('li'); //Make new item for movie
            item.className = 'movie-item';

            //Display title of movie in list, add event handler for onclick
            let titleElement = document.createElement('div'); 
            titleElement.className = 'movie-title';
            titleElement.innerHTML = movie.Title;
            titleElement.addEventListener('click', () => toggleDetails(movie.imdbID)); 

            //Details of each movie for dropdown
            let detailsElement = document.createElement('div');
            detailsElement.className = 'movie-details';
            detailsElement.id = `details-${movie.imdbID}`;

            let movieData = await getDataID(movie.imdbID); //Needed as search for title doesn't have all data required

            detailsElement.innerHTML = `
                <div id="details">
                    <h2>${movie.Title}</h2>
                    <p><strong>Year:</strong> ${movie.Year}</p>
                    <p><strong>Genre:</strong> ${movieData.Genre}</p>
                    <p><strong>Director:</strong> ${movieData.Director}</p>
                    <p><strong>Cast:</strong> ${movieData.Actors}</p>
                    <p><strong>Plot:</strong> ${movieData.Plot}</p>
                    <p><strong>Rating:</strong> ${movieData.imdbRating}/10</p>
                    <img src="${movie.Poster}" alt="${movie.Title}" style="width: 200px;">
                </div>
            `;

            //Add item to list of titles and details, and add to overall movie list
            item.appendChild(titleElement);
            item.appendChild(detailsElement);
            detailsElement.style.display = 'none';
            movieList.appendChild(item);
        });
    } else {
        movieList.innerHTML = 'No movies found.';
    }
}

function toggleDetails(imdbID) {
    //Used for movie dropdown, click on title for more details
    let detailsElement = document.getElementById(`details-${imdbID}`);
    if (detailsElement.style.display === 'none' || detailsElement.style.display === '') {
        detailsElement.style.display = 'block';
    } else {
        detailsElement.style.display = 'none';
    }
}

//Input for search bar triggers movie search
document.getElementById('searchbar').addEventListener('input', async () => {
    await populateData(); 
});