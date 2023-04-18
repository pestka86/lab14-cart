/* global Cart */
"use strict";

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tableRow = document.querySelector.SectorAll("#cart tbody tr");

  for (let i = 0; if i <= tableRows.length; i++) {
    if (tableRows[i]) {
      tableRows[i].remove();
    }
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  const tableBody = document.quarySelectorAll("#cart tbody");
  // TODO: Iterate over the items in the cart
  for (let i in state.cart.items) {
    const tr = document.createElement("tr");
    const xTD = document.createElement("td");
    xTD.textContent = "x";
    xTD.classList.add("remover");
    xTD.id = i;
    const qTD = document.createElement("td");
    const iTD = document.createElement("td");
    iTD.textContent = state.cart.items[i].product;
    tableBody.appendChild(tr);
    tr.appendChild(xTD);
    tr.appendChild(qTD);
    tr.appendChild(iTD);

  };
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  if (event.target.classList.contains("remover")) {
    state.cart.removeItem(parseInt(event.target.id));
    state.cart.saveToLocalStorage();
    renderCart();
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();
