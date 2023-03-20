const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4e39a2ec6ea15ebb0f351543d21f16fc&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?&api_key=4e39a2ec6ea15ebb0f351543d21f16fc&query="'
const FORM = document.getElementById("form")
const SEARCH = document.getElementById("search")
const main = document.getElementById("main")
getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
    showMoovies(data.results)
}

function showMoovies(movies) {
    main.innerHTML = ''
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
      
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div>
 `
    main.appendChild(movieEl)
    });
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = SEARCH.ariaValueMax
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm)
        SEARCH.value = ''
    }
    else {
        window.location.reload()
    }
})