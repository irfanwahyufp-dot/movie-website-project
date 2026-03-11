const API =
"https://api.themoviedb.org/3/movie/popular?api_key=demo&language=en-US&page=1"

const IMG =
"https://image.tmdb.org/t/p/w500"

const HERO =
"https://image.tmdb.org/t/p/original"

let movies = []

fetch(API)
.then(res=>res.json())
.then(data=>{

movies = data.results

showMovies(movies)

startSlider()

})

function showMovies(data){

const list=document.getElementById("movie-list")

list.innerHTML=""

data.forEach(movie=>{

const div=document.createElement("div")

div.classList.add("movie")

div.innerHTML=`

<img src="${IMG+movie.poster_path}">

<div class="preview">

<h4>${movie.title}</h4>

<p>⭐ ${movie.vote_average}</p>

</div>

`

list.appendChild(div)

})

}


/* SEARCH */

function searchMovie(){

const text =
document.getElementById("search").value.toLowerCase()

const filtered =
movies.filter(m=>m.title.toLowerCase().includes(text))

showMovies(filtered)

}


/* HERO SLIDER */

let slide=0

function startSlider(){

setInterval(()=>{

const movie=movies[slide]

document.getElementById("hero-img").src=
HERO+movie.backdrop_path

document.getElementById("hero-title").innerText=
movie.title

document.getElementById("hero-desc").innerText=
movie.overview.substring(0,120)+"..."

slide++

if(slide>=movies.length){

slide=0

}

},3000)

}
