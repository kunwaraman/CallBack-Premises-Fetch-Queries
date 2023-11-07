 async function getCheese() {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve('cheese')
        },1000);
    })
}

async function makeDough(cheese) {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(`${cheese} dough`);
        },2000)
    })
}
 

 async function makePizza(dough) {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(`${dough} dough`);
        },2000)
    })
}
 

async function orderAPizza() {
    const cheese = await getCheese();
    console.log('now we have' ,cheese);
    const dough = await makeDough(cheese);
    console.log('now we have ',dough);
    const pizza = await makePizza(dough);
    console.log('now we have',pizza);
    return pizza;
}
const pizza = orderAPizza();
console.log(pizza);

