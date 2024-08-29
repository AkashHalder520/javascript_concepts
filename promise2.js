// const dataobj = [
//   { name: "akash", profession: "software engineering" },
//   { name: "Mohit", profession: "software engineering" },
// ];
// function printdata() {
//   setTimeout(() => {
//     dataobj.forEach((data) => {
//       console.log(data.name);
//     });
//   }, 5000);
// }
// function createdata(newdata) {
//   setTimeout(() => {
//     dataobj.push(newdata);
//   }, 1000);
// }
// printdata();
// createdata({ name: "Rahul", profession: "software engineering" });

//when we run this program only akash and mohit gets displayed not Rahul if we use 1 sec in printdata but if we use 5 second then all names comes.this happens because in 1 second the printdata gets executed and the page refreshed ...and the 2nd method doesnt run

// ****callback to solve this****

// const dataobj = [
//   { name: "akash", profession: "software engineering" },
//   { name: "Mohit", profession: "software engineering" },
// ];
// function getdata() {
//   setTimeout(() => {
//     dataobj.forEach((data, index) => {
//       console.log(data.name);
//     });
//   }, 3000);
// }
// function createdata(newdata, callback) {
//   setTimeout(() => {
//     callback();
//     dataobj.push(newdata);
//   }, 5000);
// }
// createdata({ name: "Rahul", profession: "software engineering" }, getdata);

//****promise to solve this****

// A Promise is a special JavaScript object. It produces a value after an asynchronous (aka, async) operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.

//Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.

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
function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Promise has been resolved");
        resolve("resmi");
      } else {
        console.log("Your promise has not resolved");
        reject("sorry not fulfilled");
      }
    }, 2000);
  });
}

func1()
  .then((asdf) => {
    console.log("Thanks for resolving=>" + asdf);
  })
  .catch((error) => {
    console.log("very bad " + error);
  });
