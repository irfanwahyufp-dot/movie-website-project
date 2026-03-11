const API =
"https://api.tvmaze.com/shows"

const IMG =
"https://static.tvmaze.com/uploads/images/medium_portrait"

let movies = []

fetch(API)
.then(res=>res.json())
.then(data=>{

movies=data

showMovies(data)

startHero()

})

function showMovies(data){

const container=
document.getElementById("movies")

container.innerHTML=""

data.slice(0,30).forEach(movie=>{

const div=document.createElement("div")

div.classList.add("movie")

div.innerHTML=`

<img src="${movie.image.medium}">

<div class="preview">

<h4>${movie.name}</h4>

</div>

`

container.appendChild(div)

})

}

/* hero slider */

let index=0

function startHero(){

setInterval(()=>{

const movie=movies[index]

document.getElementById("hero-img").src=
movie.image.original

document.getElementById("hero-title").innerText=
movie.name

document.getElementById("hero-desc").innerText=
movie.summary.replace(/<[^>]+>/g,"").slice(0,120)

index++

if(index>=movies.length){

index=0

}

},4000)

}

/* search */

function searchMovie(){

const text=
document.getElementById("search").value.toLowerCase()

const filtered=
movies.filter(m=>m.name.toLowerCase().includes(text))

showMovies(filtered)

}
