const APIKEY="2b3f5b8a0f2f3c7d19f6e7eae4c0b123"

const IMG="https://image.tmdb.org/t/p/w500"
const HERO="https://image.tmdb.org/t/p/original"

let allMovies=[]

/* FETCH DATA */

fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKEY}`)
.then(res=>res.json())
.then(data=>{

allMovies=data.results

createRow(data.results,"trending")

startHero()

})

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`)
.then(res=>res.json())
.then(data=>{

createRow(data.results,"popular")

})

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}`)
.then(res=>res.json())
.then(data=>{

createRow(data.results,"toprated")

})

/* CREATE MOVIE ROW */

function createRow(data,id){

const container=document.getElementById(id)

data.forEach(movie=>{

const div=document.createElement("div")

div.classList.add("movie")

div.innerHTML=`

<img src="${IMG+movie.poster_path}">

<div class="preview">

<h4>${movie.title}</h4>

<p>⭐ ${movie.vote_average}</p>

<button onclick='addMyList(${JSON.stringify(movie)})'>+ My List</button>

</div>

`

container.appendChild(div)

})

}


/* HERO SLIDER */

let heroIndex=0

function startHero(){

setInterval(()=>{

const movie=allMovies[heroIndex]

document.getElementById("hero-img").src=HERO+movie.backdrop_path

document.getElementById("hero-title").innerText=movie.title

document.getElementById("hero-desc").innerText=movie.overview.substring(0,150)+"..."

heroIndex++

if(heroIndex>=allMovies.length){

heroIndex=0

}

},4000)

}


/* SEARCH */

function searchMovie(){

const text=document.getElementById("search").value.toLowerCase()

const filtered=allMovies.filter(m=>m.title.toLowerCase().includes(text))

const row=document.getElementById("trending")

row.innerHTML=""

createRow(filtered,"trending")

}


/* MY LIST */

function addMyList(movie){

let list=JSON.parse(localStorage.getItem("mylist"))||[]

list.push(movie)

localStorage.setItem("mylist",JSON.stringify(list))

showMyList()

}

function showMyList(){

let list=JSON.parse(localStorage.getItem("mylist"))||[]

const container=document.getElementById("mylist")

container.innerHTML=""

list.forEach(movie=>{

const div=document.createElement("div")

div.classList.add("movie")

div.innerHTML=`

<img src="${IMG+movie.poster_path}">

<div class="preview">

<h4>${movie.title}</h4>

<p>⭐ ${movie.vote_average}</p>

</div>

`

container.appendChild(div)

})

}

showMyList()
