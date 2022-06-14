// Description
// This time we're going to build a train fare calculator. Simple enough, right?
// We're not looking for something too fancy, but you should be able to input your age and the distance you're travelling and get your ticket price.

// - Ask the user for their age and how far they are travelling (in km)
//    -- The price per travelled km will be £0.21
//    -- Junior passengers (under 18) get a 20% discount
//    -- Senior passengers (over 65) get a 40% discount
// - Based on the answers, print a message in the console which tells the user how much they will need to pay for the ride.

let age = Number(prompt("How old are you?"))
let kmPrice = 0.21
let under18passengers = 0.8
let over65passengers = 0.6
let distance = Number(prompt("Type you're distance (KM)"))

let price = distance * kmPrice;

let total;
if (age < 18) {
  total = price * under18passengers
  console.log("Total price is:" + "£" + total)
}
else if(age > 65) {
    total = price * over65passengers
    console.log("Total price is:" + "£" + total)
}
else{
    console.log("Total price is:" + "£" + price)
}