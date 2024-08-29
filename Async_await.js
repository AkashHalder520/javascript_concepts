//****async await it came on 2017 after es6****
// await works with async function only
// async function returns promise
//EXAMPLE 1
// async function test(){
//     console.log("2nd message");
//     await console.log("3nd message");// after 3rdmessage  rest code will wait
//     console.log("4nd message");
// await console.log("3nd message");
// }
// console.log("1nd message");
// test()
// console.log("5nd message");

//EXAMPLE 2

// async function nill(){
//     console.log("2nd message")
//     const url='https://api.github.com/users';
//     const response=await fetch(url)
//     console.log("3rd message");
//     const users= await response.json();
//     console.log("4th message");
//     return users;

//   }
//   console.log("1st message");
//   let a=nill();
//   console.log("5th message")
//   console.log(a)
// //    a.then((data)=>console.log(data))
