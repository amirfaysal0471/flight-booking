
document.getElementById('first-plus-btn').addEventListener("click", function () {
    quantityChange(true, "first-count");
})
document.getElementById('first-minus-btn').addEventListener("click", function () {
    quantityChange(false, "first-count");
})


document.getElementById('economy-plus-btn').addEventListener("click", function () {
    quantityChange(true, "economy-count");
})

document.getElementById('economy-minus-btn').addEventListener("click", function () {
    quantityChange(false, "economy-count");
})


document.getElementById('book-btn').addEventListener("click", function () {
    const flyingFrom = document.getElementById('flying-from').value;
    const flyingTo = document.getElementById('flying-to').value;
    const departureDate = document.getElementById('departure-date').value;

    if (flyingFrom == "" ||
        flyingTo == "" ||
        departureDate == ""
    ) {
        
        document.getElementById('conformation-message').innerText = "Please complete all required fields.";
    }
    else {

        
        document.getElementById('conformation-message').innerText = "Congratulations !! Your flight booking is confirmed.";

     
        afterSubmit('flying-from');
        afterSubmit('flying-to');
        afterSubmit('departure-date');
        afterSubmit('return-date');
        afterSubmitInnerText('first-count');
        afterSubmitInnerText('economy-count');
        afterSubmitInnerText('sub-total');
        afterSubmitInnerText('total-vat');
        afterSubmitInnerText('total-price');
    }

})

function quantityChange(isIncrease, id) {
    const input = document.getElementById(id);
    const count = parseInt(input.value);
    let newCount = count;
    if (isIncrease == true) {
        newCount = count + 1;
    }
    if (isIncrease == false && newCount > 0) {
        newCount = count - 1;
    }
    input.value = newCount;
    totalPrice();
}


function totalPrice() {
    const firstCount = document.getElementById('first-count');
    const firstCountNumber = parseInt(firstCount.value);

    const economyCount = document.getElementById('economy-count');
    const economyCountNumber = parseInt(economyCount.value);


    const subTotalPrice = (firstCountNumber * 150) + (economyCountNumber * 100);
    document.getElementById('sub-total').innerText = subTotalPrice;

    
    const vat = subTotalPrice * 0.1;
    document.getElementById('total-vat').innerText = vat;

    
    const totalTicketPrice = subTotalPrice + vat;
    document.getElementById('total-price').innerText = totalTicketPrice;
}

function afterSubmit(id) {
    document.getElementById(id).value = "";

}

function afterSubmitInnerText(id) {
    document.getElementById(id).value = "0";
}