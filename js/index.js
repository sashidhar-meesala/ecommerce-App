let minusButtonP=document.getElementById("minusP");
let plusButtonP=document.getElementById("plusP");
let qtyLabelP=document.getElementById("quantityP");


let minusButtonS=document.getElementById("minusS");
let plusButtonS=document.getElementById("plusS");
let qtyLabelS=document.getElementById("quantityS");

let pantPriceLabel=document.getElementById("extendedpricePants");
let shirtPriceLabel=document.getElementById("extendedpriceShirts");


function increaseQuantityP()
{
    let qty= parseInt(qtyLabelP.innerHTML)+1;
    qtyLabelP.innerHTML=qty;
    extendedPriceP();
    
}


function descreaseQuantityP(){
    let qty= parseInt(qtyLabelP.innerHTML)-1;
    qtyLabelP.innerHTML=qty;
    extendedPriceP();
}

function extendedPriceP(){
     let price= parseInt(qtyLabelP.innerHTML) * 40.99;
     pantPriceLabel.innerHTML=price;
}



function increaseQuantityS()
{
    let qty= parseInt(qtyLabelS.innerHTML)+1;
    qtyLabelS.innerHTML=qty;
    extendedPriceS();
    
}


function descreaseQuantityS(){
    let qty= parseInt(qtyLabelS.innerHTML)-1;
    qtyLabelS.innerHTML=qty;
    extendedPriceS();
}

function extendedPriceS(){
     let price= parseInt(qtyLabelS.innerHTML) * 10.99;
     shirtPriceLabel.innerHTML=price;
}



minusButtonP.addEventListener("click",descreaseQuantityP);
plusButtonP.addEventListener("click",increaseQuantityP);
minusButtonS.addEventListener("click",descreaseQuantityS);
plusButtonS.addEventListener("click",increaseQuantityS);