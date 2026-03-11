let movieSelected = ""
let seatSelected = ""

function trailer(link){

document.getElementById("video").src = link
document.getElementById("trailerPopup").style.display="flex"

}

function closeTrailer(){

document.getElementById("trailerPopup").style.display="none"

}


function buyTicket(movie){

movieSelected = movie

document.getElementById("seatPopup").style.display="flex"

createSeats()

}


function createSeats(){

let seats = document.getElementById("seats")

seats.innerHTML=""

for(let i=1;i<=20;i++){

let seat=document.createElement("div")

seat.className="seat"

seat.innerText=i

seat.onclick=function(){

document.querySelectorAll(".seat").forEach(s=>s.classList.remove("selected"))

seat.classList.add("selected")

seatSelected=i

}

seats.appendChild(seat)

}

}


function continuePayment(){

document.getElementById("seatPopup").style.display="none"

document.getElementById("paymentPopup").style.display="flex"

}


function pay(){

let payment=document.getElementById("paymentMethod").value

document.getElementById("paymentPopup").style.display="none"

addHistory(movieSelected,seatSelected,payment)

}


function addHistory(movie,seat,payment){

let table=document.getElementById("ticketHistory")

let row=document.createElement("tr")

let qr=`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${movie}-${seat}`

row.innerHTML=`

<td>${movie}</td>
<td>${seat}</td>
<td>${payment}</td>
<td>Rp 35000</td>
<td><img src="${qr}"></td>
<td><button onclick="print()">Print</button></td>

`

table.appendChild(row)

}
