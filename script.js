const movies = [

{
title:"Stranger Things",
poster:"https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
bg:"https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
desc:"When a boy disappears, a town uncovers secret experiments.",
trailer:"https://www.youtube.com/embed/b9EkMc79ZSU"
},

{
title:"Wednesday",
poster:"https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
bg:"https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
desc:"Wednesday Addams investigates supernatural mysteries.",
trailer:"https://www.youtube.com/embed/Di310WS8zLk"
},

{
title:"Money Heist",
poster:"https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
bg:"https://image.tmdb.org/t/p/original/8OMV0H3gKUMmWmM0aZxE6TVt1U3.jpg",
desc:"A criminal mastermind plans the biggest heist in history.",
trailer:"https://www.youtube.com/embed/_InqQJRqGW4"
},

{
title:"The Witcher",
poster:"https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
bg:"https://image.tmdb.org/t/p/original/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
desc:"Geralt hunts monsters in a dark fantasy world.",
trailer:"https://www.youtube.com/embed/ndl1W4ltcmg"
}

]


/* HERO SLIDER */

let index=0

const hero=document.querySelector(".hero")

const title=document.getElementById("heroTitle")

const desc=document.getElementById("heroDesc")

function updateHero(){

const movie=movies[index]

hero.style.backgroundImage=`url(${movie.bg})`

title.innerText=movie.title

desc.innerText=movie.desc

}

updateHero()

setInterval(()=>{

index++

if(index>=movies.length) index=0

updateHero()

},5000)



/* MOVIE ROW */

function renderMovies(section){

const container=document.getElementById(section)

movies.forEach(movie=>{

const div=document.createElement("div")

div.classList.add("movie")

div.innerHTML=`

<img src="${movie.poster}">

<div class="preview">

<iframe src="${movie.trailer}?autoplay=1&mute=1"></iframe>

<h4>${movie.title}</h4>

</div>

`

div.onclick=()=>openTrailer(movie.trailer)

container.appendChild(div)

})

}

renderMovies("trending")

renderMovies("popular")

renderMovies("top")



/* MODAL TRAILER */

const modal=document.getElementById("trailerModal")

const frame=document.getElementById("trailerFrame")

function openTrailer(src){

modal.style.display="flex"

frame.src=src

}

document.getElementById("close").onclick=()=>{

modal.style.display="none"

frame.src=""

}

document.getElementById("heroPlay").onclick=()=>{

openTrailer(movies[index].trailer)

}
