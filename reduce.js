const array = [1, 2, 3, 4]
const intialvalue = 0
const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, intialvalue)
console.log(sum);

// in array reduce we have to set the initialvalue because 
// we need to set the accumulator automatically 

let cart = [
    {
        course: "js course",
        price: 2400
    }, 
    {
        course: "js course",
        price: 2800
    }, 
    {
        course: "js course",
        price: 2900
    }, 
    {
        course: "js course",
        price: 2900
    },

]
// suppose we have to add all the total price of the cart

const total=cart.reduce((accumulator,currentValue)=>{
return accumulator+currentValue.price 
},0)
console.log(total); // we get the total value of the cart
