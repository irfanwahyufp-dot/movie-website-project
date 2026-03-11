const movies = [

{
title:"Stranger Things",
poster:"https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
trailer:"https://www.youtube.com/embed/b9EkMc79ZSU?autoplay=1&mute=1"
},

{
title:"Wednesday",
poster:"https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
trailer:"https://www.youtube.com/embed/Di310WS8zLk?autoplay=1&mute=1"
},

{
title:"Money Heist",
poster:"https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
trailer:"https://www.youtube.com/embed/_InqQJRqGW4?autoplay=1&mute=1"
}

]


const container = document.getElementById("movies")

movies.forEach(movie=>{

const div = document.createElement("div")

div.classList.add("movie")

div.innerHTML = `

<img src="${movie.poster}">

<div class="preview">

<iframe
src="${movie.trailer}"
frameborder="0"
allow="autoplay"
></iframe>

<h4>${movie.title}</h4>

</div>

`

container.appendChild(div)

})
