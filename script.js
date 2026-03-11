const API = "https://api.tvmaze.com/shows"

let movies = []

fetch(API)
.then(res => res.json())
.then(data => {

movies = data

showMovies(data)

startHero()

})

function showMovies(data){

const container = document.getElementById("movies")

container.innerHTML = ""

data.slice(0,30).forEach(movie => {

let image = "https://via.placeholder.com/210x295?text=No+Image"

if(movie.image && movie.image.medium){

image = movie.image.medium

}

const div = document.createElement("div")

div.classList.add("movie")

div.innerHTML = `

<img src="${image}">

<div class="preview">

<h4>${movie.name}</h4>

</div>

`

container.appendChild(div)

})

}

/* HERO */

let index = 0

function startHero(){

setInterval(()=>{

let movie = movies[index]

let image = "https://via.placeholder.com/1280x720?text=Movie"

if(movie.image && movie.image.original){

image = movie.image.original

}

document.getElementById("hero-img").src = image

document.getElementById("hero-title").innerText = movie.name

let desc = movie.summary
? movie.summary.replace(/<[^>]+>/g,"")
: "No description available"

document.getElementById("hero-desc").innerText = desc.slice(0,120)

index++

if(index >= movies.length){

index = 0

}

},4000)

}

/* SEARCH */

function searchMovie(){

const text = document.getElementById("search").value.toLowerCase()

const filtered = movies.filter(movie =>
movie.name.toLowerCase().includes(text)
)

showMovies(filtered)

}
