let welcome= function () {
    return "hello world"
}
console.log(welcome());

let welcome2= function (name) {
    return `hello world ${name}`
}
console.log(welcome2("i am sending parameter"));

// self-invoked function means it will call automatically

(function(){
    console.log('hello');
    
})()

//arrow function

let welcome3 =(name) => { // r
    return `hello world ${name}`
}
console.log(welcome2("i am sending parameter"));

// there are 3 types of function annonimous function and named fucntion


// const user={
//     username:"akash",
//     price :999,
//     welcomeMessage: function(){
//         console.log(`welcome ${this.username} to this website `);
//     }
// }

// user.welcomeMessage()
