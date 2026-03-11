let selectedMovie=""
let selectedSeat=""

function searchMovie(){

let input=document.getElementById("searchMovie").value.toLowerCase()

let movies=document.querySelectorAll(".movie-card")

movies.forEach(movie=>{

let title=movie.innerText.toLowerCase()

movie.style.display=title.includes(input)?"block":"none"

})

}



function watchTrailer(link){

document.getElementById("trailerVideo").src=link
document.getElementById("trailerPopup").style.display="flex"

}

function closeTrailer(){

document.getElementById("trailerPopup").style.display="none"
document.getElementById("trailerVideo").src=""

}



function buyTicket(movie){

selectedMovie=movie

document.getElementById("seatPopup").style.display="flex"

generateSeats()

}



function generateSeats(){

let container=document.getElementById("seats")

container.innerHTML=""

for(let i=1;i<=20;i++){

let seat=document.createElement("div")

seat.className="seat"

seat.innerText="D"+i

seat.onclick=function(){

document.querySelectorAll(".seat").forEach(s=>s.classList.remove("selected"))

seat.classList.add("selected")

selectedSeat=seat.innerText

}

container.appendChild(seat)

}

}



function nextPayment(){

if(selectedSeat==""){

alert("Select seat first")
return

}

document.getElementById("seatPopup").style.display="none"

document.getElementById("paymentPopup").style.display="flex"

}



function payTicket(){

let payment=document.getElementById("paymentMethod").value
let time=document.getElementById("showtime").value

document.getElementById("paymentPopup").style.display="none"

createTicket(selectedMovie,selectedSeat,payment,time)

addHistory(selectedMovie,selectedSeat,payment,time)

}



function createTicket(movie,seat,payment,time){

let qr=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${movie}-${seat}`

let html=`

<div class="ticket">

<h2>XXI CINEMA</h2>

<p>Movie : ${movie}</p>
<p>Seat : ${seat}</p>
<p>Time : ${time}</p>
<p>Payment : ${payment}</p>
<p>Total : Rp 35000</p>

<img src="${qr}">

<br><br>

<button onclick="window.print()">Print Ticket</button>

</div>

`

document.getElementById("ticketContent").innerHTML=html

document.getElementById("ticketPopup").style.display="flex"

}



function closeTicket(){

document.getElementById("ticketPopup").style.display="none"

}



function addHistory(movie,seat,payment,time){

let table=document.getElementById("historyTable")

let qr=`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${movie}-${seat}`

let row=`

<tr>

<td>${movie}</td>
<td>${seat}</td>
<td>${time}</td>
<td>${payment}</td>
<td>Rp 35000</td>
<td><img src="${qr}"></td>
<td><button onclick="window.print()">Print</button></td>

</tr>

`

table.innerHTML+=row

}
