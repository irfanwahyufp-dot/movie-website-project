const API = "https://api.tvmaze.com/shows"

let movies = []

fetch(API)

.then(res => res.json())

.then(data => {

movies = data

showMovies()

startHero()

})


function showMovies(){

const container = document.getElementById("movies")

container.innerHTML = ""

movies.slice(0,40).forEach(movie => {

if(!movie.image) return

const div = document.createElement("div")

div.classList.add("movie")

div.innerHTML = `

<img src="${movie.image.medium}">

`

container.appendChild(div)

})

}



/* HERO SLIDER */

let index = 0

function startHero(){

setInterval(()=>{

let movie = movies[index]

if(movie.image){

document.getElementById("hero-img").src =
movie.image.original

document.getElementById("hero-title").innerText =
movie.name

let desc = movie.summary
? movie.summary.replace(/<[^>]+>/g,"")
: ""

document.getElementById("hero-desc").innerText =
desc.slice(0,140)

}

index++

if(index >= movies.length){

index = 0

}

},4000)

}
