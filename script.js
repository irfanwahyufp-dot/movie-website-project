let selectedMovie=""
let selectedSeat=""

document.getElementById("search").addEventListener("keyup",function(){

let filter=this.value.toLowerCase()
let movies=document.querySelectorAll(".movie")

movies.forEach(movie=>{

let title=movie.querySelector("h3").innerText.toLowerCase()

movie.style.display=title.includes(filter)?"block":"none"

})

})


function watchTrailer(link){

document.getElementById("video").src=link
document.getElementById("trailerPopup").style.display="flex"

}

function closeTrailer(){

document.getElementById("trailerPopup").style.display="none"

}


function buyTicket(movie){

selectedMovie=movie

document.getElementById("seatPopup").style.display="flex"

createSeats()

}


function createSeats(){

let seats=document.getElementById("seats")
seats.innerHTML=""

let rows=["A","B","C","D","E"]

rows.forEach(row=>{

for(let i=1;i<=5;i++){

let seat=document.createElement("div")

seat.className="seat"

seat.innerText=row+i

seat.onclick=function(){

document.querySelectorAll(".seat").forEach(s=>s.classList.remove("selected"))

seat.classList.add("selected")

selectedSeat=row+i

}

seats.appendChild(seat)

}

})

}


function continuePayment(){

document.getElementById("seatPopup").style.display="none"

document.getElementById("paymentPopup").style.display="flex"

}


function payTicket(){

let payment=document.getElementById("paymentMethod").value

document.getElementById("paymentPopup").style.display="none"

createTicket(selectedMovie,selectedSeat,payment)

addHistory(selectedMovie,selectedSeat,payment)

}


function createTicket(movie,seat,payment){

let qr=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${movie}-${seat}`

document.getElementById("ticketDesign").innerHTML=`

<div class="ticket">

<h2>XXI CINEMA</h2>

<p>Movie : ${movie}</p>
<p>Seat : ${seat}</p>
<p>Payment : ${payment}</p>
<p>Total : Rp 35000</p>

<img src="${qr}">

<br><br>

<button onclick="window.print()">Print Ticket</button>

</div>

`

document.getElementById("ticketPopup").style.display="flex"

}


function addHistory(movie,seat,payment){

let qr=`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${movie}-${seat}`

let row=document.createElement("tr")

row.innerHTML=`

<td>${movie}</td>
<td>${seat}</td>
<td>${payment}</td>
<td>Rp 35000</td>
<td><img src="${qr}"></td>
<td><button onclick="window.print()">Print</button></td>

`

document.getElementById("historyTable").appendChild(row)

}
