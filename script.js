const seatContainer = document.getElementById("seats")

for(let i=0;i<30;i++){

const seat=document.createElement("div")

seat.classList.add("seat")

seat.addEventListener("click",()=>{

seat.classList.toggle("selected")

})

seatContainer.appendChild(seat)

}

function openBooking(movie){

document.getElementById("bookingModal").style.display="flex"

document.getElementById("movieTitle").innerText="Pesan Tiket: "+movie

}

function closeModal(){

document.getElementById("bookingModal").style.display="none"

}

function confirmBooking(){

const selectedSeats=document.querySelectorAll(".seat.selected").length

alert("Tiket berhasil dipesan\nJumlah kursi: "+selectedSeats)

closeModal()

}