console.log("Im Javascript code running in your currency converter");

// const currency = prompt("VND or USD").toUpperCase();
// let amount = prompt("How much?")
// const exchangeRate = 23235;

// if (currency === "VNDUSD") {
//     if(amount > 0 ){
//         vndtoUsd()
//     }else{
//         alert("Please insert correct amount!")
//     }
// }

//  else if(currency === "USD") {
//     if(amount > 0 ){
//         usdtoVND()
//     }else{
//         alert("Please insert correct amount!")
//     }
//  }  else {
//     console.log("enter a correct currency")
//  }

// function vndtoUsd() {
//     let result = (amount / exchangeRate).toFixed(2);
//     result = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result);
//     console.log("result is", result)
//     document.write(result)
// }

// function usdtoVND() {
//    let result = amount * exchangeRate;
//    result = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(result);
//    console.log("result is", result)
// }

let amountInput = document.getElementById("amount");
let convertButton = document.getElementById("convertButton");
let resultArea = document.getElementById("resultArea");
let fromCurrency = document.getElementById("fromCurrency");

console.log("hhhhh", amountInput);
console.log("bbbb", convertButton);

const exchangeRate = {
  VND: {
    usd: 0.000043,
    eur: 0.000039,
    vnd: 1,
    krw: 0.051,
    yen: 0.0047
  },
  USD: {
    usd: 1,
    eur: 0.9,
    vnd: 23235.5,
    krw: 1192.43,
    yen: 107.92
  },
  EUR: {
    usd: 1.11,
    euro: 1,
    vnd: 25795.7,
    krw: 1327.28,
    yen: 120.11
  },
  KRW: {
    usd: 0.00084,
    euro: 0.00075,
    vnd: 19.48,
    krw: 1,
    yen: 0.091
  },
  YEN: {
    usd: 0.0093,
    euro: 0.0083,
    vnd: 215.35,
    krw: 11.05,
    yen: 1
  }
};

// function usdtoVND(){
//     let from = document.getElementById('fromCurrency').value;
//     let to = document.querySelector ('input[name="toCurrency"]:checked').value
//     let amount = amountInput.value;
//     let result = (amount * exchangeRate).toFixed(2);
//     result = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(result);
//     resultArea.innerHTML = `This is the result ${result}`;
// }

function vndtoUSD() {
  let from = document.getElementById("fromCurrency").value;
  let to = document
    .querySelector('input[name="toCurrency"]:checked')
    .value.toLowerCase();
  let amount = amountInput.value;
  let result = (amount * exchangeRate[from][to]).toFixed(2);
  result = new Intl.NumberFormat("en-VN", {
    style: "currency",
    currency: to
  }).format(result);
  resultArea.innerHTML = `This is the result ${result}`;
}
