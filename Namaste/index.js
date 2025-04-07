// const GITHUB_API = "https://api.github.com/users/vineetsing-h"

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function(data){
//     console.log(data)
// })

const cart = ["shoes","pants","shirts"];

createOrder(cart, function(orderId){

    proceedToPayment(orderId, function(paymentInfo) {

        showOrderSummary(paymentInfo, function(){

            updateWalletBalance();

        });

        });
});






// using promise
createOrder(cart)
.then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
   return showOrderSummary(paymentInfo);
})