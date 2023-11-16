const barcode = document.getElementById("barcode")
const quantity = document.getElementById("quantity")
const add_item = document.getElementById("add_item")
const total = document.getElementById("total")
const itemContainer = document.getElementById("itemContainer")
const grand_total = document.getElementById("grand_total")
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
        let itemName = document.createElement("p")
        itemName.innerText = item.name;
        let itemPrice = document.createElement("p")
        itemPrice.innerText = item.price;
         let quantityNum = quantity.value
         let itemQuantity = document.createElement("p")
         itemQuantity.innerText = quantityNum;
         let storing_box = document.createElement("div")
         storing_box.classList.add("list")
         storing_box.style.border= "7px solid red;"
         storing_box.appendChild(itemName)
         storing_box.appendChild(itemPrice)
         storing_box.appendChild(itemQuantity)
         itemContainer.appendChild(storing_box)
        //  itemContianer.classList.add("list")
    }
}

add_item.addEventListener("click", checkitem)