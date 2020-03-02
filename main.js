console.log('Im Javascript code running in your currency converter')

const currency = prompt("VND or USD");
let vndToUsd= "";
let amount = 0;
const exchangeRate = 23235;

if (currency === "VND") {
    amount = prompt("How much VND?")
    if(isNaN(amount) === true){
        alert("Type Numberic only please!")
    }else{
    if (amount < 0){
        alert("Please insert positive number!")
    }else{
    vndtoUsd() }
    }
}

 else if(currency === "USD") {
     amount = prompt("How much USD?");
     if(isNaN(amount) === true){
         alert("Type Numeric only please!")
     }else{
     if (amount < 0){
         alert("Please insert positive number!")
     }else{
     usdtoVnd()}
     }
 }   
 let numb = 123.23454;
 numb = numb.toFixed(2);


function vndtoUsd() {
    let result = amount / exchangeRate;
    console.log("vndtoUsd", result)
}


function usdtoVND() {
   let result = amount * exchangeRate;
    console.log("usdtoVnd", result)
    
}

// const returnednfromfunctioncall = vndtoUsd(23235);
// console.log ( "The value returned from the call to vndtoUsd",
// returnednfromfunctioncall);

// function formatCurrency(type, value) {
//     const formatter = new Intl.NumberFormat(type, {
//       currency: type,
//       style: "currency"
//     });
//     return formatter.format(value);
//   }

//   const number = 123456.789;

// console.log(new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(number));
// console.log(new Intl.NumberFormat('vnd-VND', { style: 'currency', currency: 'VND' }).format(number));
