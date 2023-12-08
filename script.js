const barcode = document.getElementById("barcode")
const quantity = document.getElementById("quantity")
const add_item = document.getElementById("add_item")
const total = document.getElementById("total")
let currentTotal = 0 
const itemContainer = document.getElementById("itemContainer")
const grand_total = document.getElementById("grand_total")
const checkout = document.getElementById("Checkout")
const statusText = document.getElementById("statusText")
const items ={
    "689145740844":{
        name:"JavaScript Textbook",
        price: 34.95
    },
    "4549292070248":{
        name: "Xerox Paper",
        price: 10.99
    },
    "092265222983":{
        name: "First Aid Kit",
        price: 20.99
    },
    "X002ELVL3J":{
        name: "Box of Pencils (50ct.)", 
        price: 15.99 
    },
    "686024002468":{
        name: "Sanitizing Wipes",
        price: 10.99
    },
    "860004186236":{
        name: "N95 Face Masks",
        price: 15.99
    },
    "036000214000":{
        name: "Kleenex",
        price: 3.99
    },
    "8809693254156":{
        name: "Hand Sanitizer",
        price: 7.99
    },
    "036500060480":{
        name: "Printer Paper",
        price: 9.99
    },
    "085014561877":{
        name: "Brush Pens",
        price: 10.99
    },
    "X0032YGP2T":{
        name: "Multiport Adapter",
        price: 25.99
    },
    "B07G6JT1XS":{
        name: "Scissors (20ct.)",
        price: 23.99
    },
    "9780134682334":{
        name: "iOS Programming Textbook",
        price: 119.99
    },
    "718103230759":{
        name: "Spiral Notebook",
        price: 1.99 
    }
}

function checkitem(){
    let barcodeNum = barcode.value;
    if(items.hasOwnProperty(barcodeNum)){
        let item = items[barcodeNum];
        let quantityNum = quantity.value
        let itemFromCart = checkCart(item)
        if(itemFromCart){
            let itemInCartQuantity = itemFromCart.querySelector(".itemQuantity")
            let newQuantity = quantityNum
            itemInCartQuantity.innerText = parseInt(itemInCartQuantity.innerText) + parseInt(newQuantity)
            console.log("found diplictae")
            let newTotal = parseFloat(item.price) * parseFloat(quantityNum);
            currentTotal += newTotal
            total.innerText = "Total $" + currentTotal;
            console.log(total.innerText)
            return;
        }
        let itemName = document.createElement("p")
        itemName.classList.add("itemName")
        itemName.innerText = item.name;
        let itemPrice = document.createElement("p")
        itemPrice.innerText = item.price;
         
         let itemQuantity = document.createElement("p")
         itemQuantity.classList.add("itemQuantity")
         itemQuantity.innerText = quantityNum;
         let storing_box = document.createElement("div")
         storing_box.classList.add("list")
         storing_box.appendChild(itemName)
         storing_box.appendChild(itemPrice)
         storing_box.appendChild(itemQuantity)
         itemContainer.appendChild(storing_box)
        //itemContianer.classList.add("list")
        let newTotal = parseFloat(item.price) * parseFloat(quantityNum);
        currentTotal += newTotal
        console.log(newTotal)
        total.innerText = "Total $" + currentTotal.toFixed(2);
    }
    else{
        statusText.innerText = "Does not exist";
    }

}

add_item.addEventListener("click", checkitem)

function displayGrandTotal(){
    let grandTotal = currentTotal * 1.0925;
    grand_total.innerText = "Grand Total $" + grandTotal.toFixed(2);
}

checkout.addEventListener("click", displayGrandTotal)

function checkCart(itemInfo){
    let itemsInCart = document.querySelectorAll(".list")
    for(var i = 0 ; i  < itemsInCart.length ; i++){
        let itemInCartName = itemsInCart[i].querySelector(".itemName")
        if(itemInfo.name === itemInCartName.innerText){
            return itemsInCart[i]
        }
    }
}