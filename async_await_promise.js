// const dataobj=[
//     {name:"akash", profession:"software engineering"},
//     {name:"Mohit", profession:"software engineering"}
// ]
// function printdata(){
//     setTimeout(()=>{
//         dataobj.forEach((data)=>{
//             console.log(data.name);
//         })
//     },5000)
// }
//     function createdata(newdata){
//         setTimeout(()=>{
//             dataobj.push(newdata);
//         },1000)
//     }
// printdata();
// createdata({name:"Rahul", profession:"software engineering"})


//when we run this program only akash and mohit gets displayed not Rahul if we use 1 sec in printdata but if we use 5 second then all names comes.this happens because in 1 second the printdata gets executed and the page refreshed ...and the 2nd method doesnt run

// ****callback to solve this**** 

// const dataobj=[
//     {name:"akash", profession:"software engineering"},
//     {name:"Mohit", profession:"software engineering"}
// ]
// function getdata(){
//     setTimeout(()=>{
//         dataobj.forEach((data,index)=>{
//             console.log(data.name);
//         })
//     },3000)
// }
//     function createdata(newdata,callback){
//         setTimeout(()=>{
//             callback()
//             dataobj.push(newdata);
//         },5000)
//     }
// createdata({name:"Rahul", profession:"software engineering"},getdata)


//****promise to solve this****

// const dataobj=[
//     {name:"akash", profession:"software engineering"},
//     {name:"Mohit", profession:"software engineering"}
// ]
// function getdata(){
//     setTimeout(()=>{
//         dataobj.forEach((data,index)=>{
//             console.log(data.name);
//         })
//     },1000)
// }
//     function createdata(newdata){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 dataobj.push(newdata);
//                 let error= false
//                 if(!error){
//                     resolve()
//                 }else{
//                     reject("there is some problem")
//                 }
//             },2000)
//         })
//     }
   


// createdata({name:"Rahul", profession:"software engineering"}).then(getdata) .catch((err)=>{console.log(err);})
// here by default the error is given false .. !error means true then resolve will execute and .then will get executed 

// Example 2
function func1(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      const error=true;
      if(!error){
        console.log("Promise has been resolved");
        resolve("resmi");
      }
      else{
        console.log("Your promise has not resolved")
        reject("sorry not fulfilled")
      }
    },2000)
  })
}

func1().then((asdf)=>{
  console.log("Thanks for resolving=>"+asdf)
}).catch((error)=>{
  console.log("very bad " + error)
})

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

