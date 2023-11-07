const  orderPizza = (callback) =>{
    setTimeout(() =>{
        const pizza ='pizzaa';
        callback(pizza);
        //return pizza;
    },2000)
    
}
// orderPizza((pizza)=> {
//     console.log('here is my' ,pizza);
// });

function getCheese(next){  //  next is the callback function
    setTimeout(() =>{
       const cheese ='chese';
       console.log('sending the ${cheese}');
       next(cheese);
    },2000);
}
function makeDough(cheese,next) {
    setTimeout(() =>{
        const dough = cheese +'chesee';
        console.log('sending the ${dough}');
        next();
    },2000);
}
function bakePizza(dough,next) {
    setTimeout(() =>{
        const pizza = dough +'pizz';
        console.log('sending the ${pizz}');
        next(pizza);
    },2000);
}

function notifyMeOrSuccess(pizza) {
    console.log('here is my notification for',pizza);

}
orderPizza(notifyMeOrSuccess);

console.log('rest');
console.log('visited mall');
