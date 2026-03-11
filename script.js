let selectedMovie=""
let selectedSeat=""

function watchTrailer(link){

document.getElementById("trailerPopup").style.display="flex"
document.getElementById("trailerFrame").src=link

}

function closeTrailer(){

document.getElementById("trailerPopup").style.display="none"
document.getElementById("trailerFrame").src=""

}

function buyTicket(movie){

selectedMovie=movie

document.getElementById("seatPopup").style.display="flex"

createSeats()

}

function createSeats(){

let seats=document.getElementById("seats")

seats.innerHTML=""

for(let i=1;i<=20;i++){

seats.innerHTML+=`<div class="seat" onclick="selectSeat(${i})">${i}</div>`

}

}

function selectSeat(num){

selectedSeat=num

document.querySelectorAll(".seat").forEach(s=>s.classList.remove("selected"))

event.target.classList.add("selected")

}

function confirmSeat(){

document.getElementById("seatPopup").style.display="none"

document.getElementById("paymentPopup").style.display="flex"

}

function changePayment(){

let method=document.getElementById("paymentMethod").value

document.getElementById("qrisBox").style.display=
method==="qris"?"block":"none"

document.getElementById("ewalletBox").style.display=
method==="ewallet"?"block":"none"

if(method==="qris"){

document.getElementById("qrTicket").src=
"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+selectedMovie

}

}

function payNow(){

let method=document.getElementById("paymentMethod").value

let payment="QRIS"

if(method==="ewallet"){

payment=document.getElementById("wallet").value

}

let ticket={

movie:selectedMovie,
seat:selectedSeat,
payment:payment,
total:35000

}

let tickets=JSON.parse(localStorage.getItem("tickets"))||[]

tickets.push(ticket)

localStorage.setItem("tickets",JSON.stringify(tickets))

document.getElementById("paymentPopup").style.display="none"

showTickets()

}

function showTickets(){

let tickets=JSON.parse(localStorage.getItem("tickets"))||[]

let box=document.getElementById("ticketHistory")

box.innerHTML=""

tickets.forEach((t,i)=>{

box.innerHTML+=`

<div class="ticket">

<b>${t.movie}</b>

<p>Seat : ${t.seat}</p>

<p>Total : Rp ${t.total}</p>

<p>Payment : ${t.payment}</p>

<img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${t.movie}-${t.seat}">

<br><br>

<button onclick="printTicket(${i})">
Cetak Struk
</button>

</div>

`

})

}

function printTicket(i){

let tickets=JSON.parse(localStorage.getItem("tickets"))

let t=tickets[i]

let w=window.open("","","width=400,height=600")

w.document.write(`

<h2>XXI Cinema</h2>

<hr>

<p>Movie : ${t.movie}</p>

<p>Seat : ${t.seat}</p>

<p>Payment : ${t.payment}</p>

<p>Total : Rp ${t.total}</p>

<hr>

Enjoy The Movie

`)

w.print()

}

window.onload=showTickets
