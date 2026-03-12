console.log("FannFlix loaded!");

const movies = document.querySelectorAll(".movie-card");

movies.forEach(movie => {
    movie.addEventListener("click", function() {
        const title = this.querySelector("h3").innerText;
        alert("You selected: " + title);
    });
});
