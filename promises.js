// basicalyy we are giving the promise to the customer that your pizza is done 

// function orderPizza() {
//     return new Promise(function(resolve,reject){
//        setTimeout(()=>{
//         const pizza = 'pizza';
//         resolve(pizza);
//        },2000)
//     })

// }
// // const pizza = orderPizza();
// // console.log(pizza);
// const pizzaPromise = orderPizza();

// pizzaPromise
//     .then(( pizza) => {
//         console.log('my pizza',pizza);
//     })


//  Railway book ticket
 // select seats
 // enter name
 // payments
 bookRailwayTicket();
function bookRailwayTicket() {
    const seat = 'A3';
    const name = 'Aman';
    const payment = 870;
    selectSeats(seat)
    .then((seat) =>{
        enterDetails(name ,seat)
    })
    .then((details) =>{
         submitPayments(name,seat,payment);
    })  

}

function selectSeats(seat) {
    return new Promise(function(resolve ,reject){
        setTimeout(() =>{
            console.log('seats confirmed' ,seat);
            resolve('confirmed ${seat}');
        },2000)
    });
}

function enterDetails(name,seat) {
    return new Promise(function(resolve,reject){
        setTimeout(() =>{
            console.log('name binded' ,name, 'with' ,seat);
            resolve('confirmed ${seat}');
        },2000)
    });
}

function submitPayments(name,seat,payment) {
    return new Promise(function(resolve,reject){
        setTimeout(() =>{
            console.log('name binded' ,name, 'with' ,seat);
            resolve(`confirmed ${name} ${seat} ${payment} `);
        },2000)
    });
}
