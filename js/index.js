//Variables for communicating with DOM
let minusButtonP = document.getElementById("minusP");
let plusButtonP = document.getElementById("plusP");
let qtyLabelP = document.getElementById("quantityP");
let minusButtonS = document.getElementById("minusS");
let plusButtonS = document.getElementById("plusS");
let qtyLabelS = document.getElementById("quantityS");
let pantPriceLabel = document.getElementById("extendedpricePants");
let shirtPriceLabel = document.getElementById("extendedpriceShirts");

//FUNCTIONS
//function to increase quantity of pants on click of '+' button
function increaseQuantityP() {
    let qty = parseInt(qtyLabelP.innerHTML) + 1;
    qtyLabelP.innerHTML = qty;
    extendedPriceP();

}

//function to decrease quantity of pants on click of '-' button
function descreaseQuantityP() {
    if (!parseInt(qtyLabelP.innerHTML) == 0) {
        let qty = parseInt(qtyLabelP.innerHTML) - 1;
        qtyLabelP.innerHTML = qty;
        extendedPriceP();
    }
    if (parseInt(qtyLabelP.innerHTML) == 0) {
        document.getElementById("total").innerHTML = '';
        document.getElementById("tax").innerHTML = '';
        document.getElementById("subtotal").innerHTML = '';

    }

}
//function to calculate the extended price of pants on click of both + and - buttons
function extendedPriceP() {
    let price = parseInt(qtyLabelP.innerHTML) * 40.99;
    priceINT = price.toFixed(2);
    pantPriceLabel.innerHTML = '$' + priceINT;
    return price;
}


//function to increase quantity of shirts on click of '+' button
function increaseQuantityS() {
    let qty = parseInt(qtyLabelS.innerHTML) + 1;
    qtyLabelS.innerHTML = qty;
    extendedPriceS();

}

//function to increase quantity of shirts on click of '-' button
function descreaseQuantityS() {
    if (!parseInt(qtyLabelS.innerHTML) == 0) {
        let qty = parseInt(qtyLabelS.innerHTML) - 1;
        qtyLabelS.innerHTML = qty;
        extendedPriceS();
        if (parseInt(qtyLabelS.innerHTML) == 0) {
            document.getElementById("total").innerHTML = '';
            document.getElementById("tax").innerHTML = '';
            document.getElementById("subtotal").innerHTML = '';

        }
    }
}

//function to calculate the extended price of shirts on click of both + and - buttons
function extendedPriceS() {
    let price = parseInt(qtyLabelS.innerHTML) * 10.99;
    priceINT = price.toFixed(2);
    shirtPriceLabel.innerHTML = '$' + priceINT;
    return price;
}


//functon to calculate the subtotal , tax and total amount to be paid on click of calculate button
function calculateAll() {
    if (!parseInt(qtyLabelS.innerHTML) == 0 || !parseInt(qtyLabelP.innerHTML) == 0) {
        let subtotal = (extendedPriceP() + extendedPriceS()).toFixed(2);
        subtotal = parseFloat(subtotal);
        document.getElementById("subtotal").innerHTML = '$' + subtotal;
        let tax = (0.13 * subtotal).toFixed(2);
        tax = parseFloat(tax);
        document.getElementById("tax").innerHTML = '$' + tax;
        let total = (subtotal + tax).toFixed(2);
        document.getElementById("total").innerHTML = '$' + total;
        document.getElementById("subtotal").style.backgroundColor = "transparent";
        document.getElementById("tax").style.backgroundColor = "transparent";
    }

}


//function to take input from user for coupon
function applycoupon() {
    const coupon = window.prompt("please enter the coupon code");
    //alert(`${coupon}`);
    //coupon=coupon.toUpperCase();
    const code = ['NOTAX', 'FIFTYFIFTY'];
    if (coupon == code[0]) {
        notax();
    } else if (coupon == code[1]) {
        fiftyfifty();
    } else if (coupon == null) {
        return;
    } else {
        alert('invalid coupon');
    }
}

//function to validate notax promocode
function notax() {
    let subtotal = (extendedPriceP() + extendedPriceS()).toFixed(2);
    subtotal = parseFloat(subtotal);
    document.getElementById("subtotal").innerHTML = '$' + subtotal;
    document.getElementById("tax").innerHTML = '$' + 0;
    let total = subtotal;
    document.getElementById("total").innerHTML = '$' + total;
    document.getElementById("tax").style.backgroundColor = "red";
    alert("Promo Applied Successfully");
}

//function to validate fiftyfifty promocode
function fiftyfifty() {
    let subtotal = (extendedPriceP() + extendedPriceS()).toFixed(2);
    subtotal = parseFloat(subtotal) / 2;
    document.getElementById("subtotal").innerHTML = '$' + subtotal;
    document.getElementById("subtotal").style.backgroundColor = "red";
    let tax = (0.13 * subtotal).toFixed(2);
    tax = parseFloat(tax);
    document.getElementById("tax").innerHTML = '$' + tax;
    let total = subtotal + tax;
    total = total.toFixed(2);
    document.getElementById("total").innerHTML = '$' + total;
    alert("Promo Applied Successfully");
}

//event listeners of buttons and execution
minusButtonP.addEventListener("click", descreaseQuantityP);
plusButtonP.addEventListener("click", increaseQuantityP);
minusButtonS.addEventListener("click", descreaseQuantityS);
plusButtonS.addEventListener("click", increaseQuantityS);
document.getElementById("Calculate").addEventListener("click", calculateAll);
document.getElementById("promo").addEventListener("click", applycoupon);