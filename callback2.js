function orderPizza(myFunction) {

    bakePizza((pizza) =>{
        myFunction(pizza);
    });
    setTimeout(() =>{
        const pizza = 'pizza';
        myFunction(pizza);
    },2000);
    
} 
 function bakePizza(callback){
    setTimeout(()=>{
        const pizza = 'pizza';
        console.log('baked the' ,pizza);
        callback(pizza);
    },2000);
  
 }

function notifyMeOrSuccess(pizza) {
    console.log('here is my notifications for' ,pizza);

}
orderPizza(notifyMeOrSuccess);