const ticketContainer = document.getElementById("ticket-container");
const ticketCount = document.getElementById("ticket-count");
const totalTicketPrice = document.getElementById("total-ticket-price");

let count = 0;
let TicketPrice = 0;
let array = [];
function btnHandler(event) {
  const isSelected = event.getAttribute("data-selected");

  if (isSelected === "true") {
    // Undo the selection
    count--;
    TicketPrice -= 500;

    const seatToRemove = document.getElementById(event.innerText);
    if (seatToRemove) {
      ticketContainer.removeChild(seatToRemove);
    }
    // array.pop(event.innerText);

    let index = array.indexOf(event.innerText);

    if (index !== -1) {
      array.splice(index, 1);
    }

    console.log(array);
    event.removeAttribute("data-selected");
    event.classList.remove("bg-gray-600", "text-green-500");
    event.classList.add("bg-slate-200");
  } else {
    if (array.length <= 3) {
      // Select the seat
      event.setAttribute("data-selected", "true");
      event.classList.remove("bg-slate-200");
      event.classList.add("bg-gray-600", "text-green-500");

      count++;
      TicketPrice += 500;

      // Create a div for the selected seat
      const selectedSeat = document.createElement("div");
      selectedSeat.id = event.innerText;
      array.push(event.innerText);
      selectedSeat.innerHTML = `
      <div class="flex justify-between mt-5">                    
          <p class="text-black tic">${event.innerText}</p>                  
          <p class="text-black">Economic</p>
          <p class="text-black">500</p>
      </div>
    `;

      ticketContainer.appendChild(selectedSeat);
    } else {
      alert("Can't select MORE then 4 Seat ");
    }
  }
  ticketCount.innerText = count;
  totalTicketPrice.innerText = TicketPrice;
  console.log(array);
  let tic = document.querySelectorAll(".tic");
  //   console.log(tic);
}

function couponCheck() {
  const grandTicketPrice = document.getElementById("grand-ticket-price");
  const coupon = document.getElementById("coupon").value.toUpperCase();
  console.log(TicketPrice);
  if (coupon === "NEW15") {
    grandTicketPrice.innerText = TicketPrice - TicketPrice * 0.15;
  } else if (coupon === "NEW20") {
    grandTicketPrice.innerText = TicketPrice - TicketPrice * 0.2;
  } else {
    alert("Coupon doesnot MATCH");
    grandTicketPrice.innerText = TicketPrice;
  }
}
