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
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();

    let data = await getData(input);
    let movieList = document.getElementById('movie-list');

    movieList.innerHTML = '';
    if (data.Search && data.Search.length > 0) {
        data.Search.forEach(movie => {
            const listItem = document.createElement("li");
            listItem.classList.add("movie-item");

            const posterImg = document.createElement("img");
            posterImg.src = movie.Poster !== "N/A" ? movie.Poster : "../images/no-image-icon.png";
            posterImg.alt = `${movie.Title} poster`;
            posterImg.classList.add("movie-poster");

            const titleText = document.createElement("p");
            titleText.textContent = movie.Title;
            titleText.classList.add("movie-title");

            listItem.addEventListener('click', async () => {
                const details = await getDataID(movie.imdbID);
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

function showMovieDetails(details) {
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
    `;
}


//Input for search triggers movie search
document.getElementById('searchbar').addEventListener('input', async () => {
    await populateData(); 
});