let selectedMovie = "";
let totalPrice = 35000;

function buyTicket(movie){

selectedMovie = movie;

document.getElementById("paymentPopup").style.display = "flex";

}

function closePayment(){

document.getElementById("paymentPopup").style.display = "none";

}

function showPaymentOption(){

let method = document.getElementById("paymentMethod").value;

let qris = document.getElementById("qrisOption");
let ewallet = document.getElementById("ewalletOption");

if(method === "qris"){

qris.style.display = "block";
ewallet.style.display = "none";

}

else if(method === "ewallet"){

ewallet.style.display = "block";
qris.style.display = "none";

}

}

function confirmPayment(){

let paymentMethod = document.getElementById("paymentMethod").value;

let wallet = document.getElementById("walletList");

let paymentDetail = "";

if(paymentMethod === "ewallet"){

paymentDetail = wallet.value;

}else{

paymentDetail = "QRIS";

}

let ticket = {

movie : selectedMovie,
time : "12:30",
seat : Math.floor(Math.random()*20)+1,
total : totalPrice,
payment : paymentDetail

};

saveTicket(ticket);

alert("Pembayaran berhasil!");

closePayment();

showTicketHistory();

}

function saveTicket(ticket){

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

tickets.push(ticket);

localStorage.setItem("tickets", JSON.stringify(tickets));

}

function showTicketHistory(){

let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

let container = document.getElementById("ticketHistory");

container.innerHTML = "";

tickets.forEach((t,i)=>{

container.innerHTML += `

<div class="ticket-box">

<p><b>Movie:</b> ${t.movie}</p>
<p><b>Time:</b> ${t.time}</p>
<p><b>Seat:</b> ${t.seat}</p>
<p><b>Total:</b> Rp ${t.total}</p>
<p><b>Payment:</b> ${t.payment}</p>

<button onclick="printReceipt(${i})">
Cetak Struk
</button>

</div>

`;

});

}

function printReceipt(index){

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

<p>Terima kasih sudah membeli tiket!</p>

`;

let win = window.open("", "", "width=400,height=600");

win.document.write(receipt);

win.document.close();

win.print();

}

window.onload = showTicketHistory;
