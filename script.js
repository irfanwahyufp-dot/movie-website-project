// film yang dipilih
let selectedMovie = "";

// buka popup saat klik Buy Ticket
function buyTicket(movie){

selectedMovie = movie;

document.getElementById("paymentPopup").style.display = "flex";

}

// tutup popup
function closePopup(){

document.getElementById("paymentPopup").style.display = "none";

}

// ganti metode pembayaran
function changePayment(){

let method = document.getElementById("paymentMethod").value;

let qris = document.getElementById("qrisBox");
let ewallet = document.getElementById("ewalletBox");

if(method === "qris"){

qris.style.display = "block";
ewallet.style.display = "none";

}

else if(method === "ewallet"){

ewallet.style.display = "block";
qris.style.display = "none";

}

}

// proses pembayaran
function payNow(){

let method = document.getElementById("paymentMethod").value;

let payment = "QRIS";

if(method === "ewallet"){

payment = document.getElementById("wallet").value;

}

// data tiket
let ticket = {

movie : selectedMovie,
time : "12:30",
seat : Math.floor(Math.random()*20)+1,
total : 35000,
payment : payment

};

// ambil data lama
let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

// tambah tiket baru
tickets.push(ticket);

// simpan ke localStorage
localStorage.setItem("tickets", JSON.stringify(tickets));

// tutup popup
closePopup();

// tampilkan tiket
showTickets();

}

// tampilkan riwayat tiket
function showTickets(){

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

let container = document.getElementById("ticketHistory");

container.innerHTML = "";

tickets.forEach((t,i)=>{

container.innerHTML += `

<div class="ticket">

<p><b>${t.movie}</b></p>
<p>Time : ${t.time}</p>
<p>Seat : ${t.seat}</p>
<p>Total : Rp ${t.total}</p>
<p>Payment : ${t.payment}</p>

<button onclick="printTicket(${i})">
Cetak Struk
</button>

</div>

`;

});

}

// cetak struk
function printTicket(index){

let tickets = JSON.parse(localStorage.getItem("tickets"));

let t = tickets[index];

let receipt = `

<h2>XXI Cinema</h2>

<hr>

<p>Movie : ${t.movie}</p>
<p>Time : ${t.time}</p>
<p>Seat : ${t.seat}</p>
<p>Payment : ${t.payment}</p>
<p>Total : Rp ${t.total}</p>

<hr>

<p>Terima kasih telah membeli tiket</p>

`;

let win = window.open("", "", "width=400,height=600");

win.document.write(receipt);

win.document.close();

win.print();

}

// tampilkan tiket saat halaman dibuka
window.onload = showTickets;
