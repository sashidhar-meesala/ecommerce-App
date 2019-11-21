let minusButtonP = document.getElementById("minusP");
let plusButtonP = document.getElementById("plusP");
let qtyLabelP = document.getElementById("quantityP");


let minusButtonS = document.getElementById("minusS");
let plusButtonS = document.getElementById("plusS");
let qtyLabelS = document.getElementById("quantityS");

let pantPriceLabel = document.getElementById("extendedpricePants");
let shirtPriceLabel = document.getElementById("extendedpriceShirts");


function increaseQuantityP() {
    let qty = parseInt(qtyLabelP.innerHTML) + 1;
    qtyLabelP.innerHTML = qty;
    extendedPriceP();

}


function descreaseQuantityP() {
    if(!parseInt(qtyLabelP.innerHTML)==0){
        let qty = parseInt(qtyLabelP.innerHTML) - 1;
        qtyLabelP.innerHTML = qty;
        extendedPriceP();
    }
    
}

function extendedPriceP() {
    let price = parseInt(qtyLabelP.innerHTML) * 40.99;
    priceINT = price.toFixed(2);
    pantPriceLabel.innerHTML = '$' + priceINT;
    return price;
}



function increaseQuantityS() {
    let qty = parseInt(qtyLabelS.innerHTML) + 1;
    qtyLabelS.innerHTML = qty;
    extendedPriceS();

}


function descreaseQuantityS() {
    if(!parseInt(qtyLabelS.innerHTML)==0){
    let qty = parseInt(qtyLabelS.innerHTML) - 1;
    qtyLabelS.innerHTML = qty;
    extendedPriceS();
}
}

function extendedPriceS() {
    let price = parseInt(qtyLabelS.innerHTML) * 10.99;
    priceINT = price.toFixed(2);
    shirtPriceLabel.innerHTML = '$' + priceINT;
    return price;
}

function calculateAll() {
    let subtotal = (extendedPriceP() + extendedPriceS()).toFixed(2);
    subtotal =parseFloat(subtotal);
    document.getElementById("subtotal").innerHTML = subtotal;
    let tax = (0.13 * subtotal).toFixed(2);
    tax=parseFloat(tax);
    document.getElementById("tax").innerHTML = tax;
    let total = subtotal + tax ;
    document.getElementById("total").innerHTML = total;
}


function applycoupon() {
    const coupon = window.prompt("please enter the coupon code");
    //alert(`${coupon}`);
    //coupon=coupon.toUpperCase();
    const code=['NOTAX','FIFTYFIFTY'];
    if(coupon == code[0]){
        notax();
    }
    else if(coupon == code[1]){
        fiftyfifty();
    }
    
    else if(coupon == null)
    {
        return;
    }
    else{
        alert('invalid coupon');
    }
}


function notax(){
    let subtotal = (extendedPriceP() + extendedPriceS()).toFixed(2);
    subtotal =parseFloat(subtotal);
    document.getElementById("subtotal").innerHTML = subtotal;
    document.getElementById("tax").innerHTML = 0;
    let total = subtotal;
    document.getElementById("total").innerHTML = total;
    alert("Promo Applied Successfully");
}


function fiftyfifty(){
    let subtotal = (extendedPriceP() + extendedPriceS()).toFixed(2);
    subtotal =parseFloat(subtotal)/2;
    document.getElementById("subtotal").innerHTML = subtotal;
    let tax = (0.13 * subtotal).toFixed(2);
    tax=parseFloat(tax);
    document.getElementById("tax").innerHTML = tax;
    let total = subtotal + tax ;
    document.getElementById("total").innerHTML = total;
    alert("Promo Applied Successfully");
}


minusButtonP.addEventListener("click", descreaseQuantityP);
plusButtonP.addEventListener("click", increaseQuantityP);
minusButtonS.addEventListener("click", descreaseQuantityS);
plusButtonS.addEventListener("click", increaseQuantityS);
document.getElementById("Calculate").addEventListener("click", calculateAll);
document.getElementById("promo").addEventListener("click", applycoupon);
