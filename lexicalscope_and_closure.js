
// Lexical scope  
//   function outer(){
//     let username= "akash"
//     console.log("outer",secret);// can not acces from inner concep as can not take property form child
//     function inner(){
//         let secret="my123"
//         console.log("inner",username);
//     }
//     function inner2(){
//         console.log("inner2",username);
//         console.log(secret);// can not access secret forom inner one
//     }
//     inner()
//     inner2()
//   }
//   outer()

  //closure
  // Function with lexical scope together forms closure
  function x(){
    let num=7
    function y(){
        console.log(num);
    }
    return y // this will return y as well as referece of x as its in lexial scope
  }
let z= x()
console.log(z); // we can see the reference 
z() // as soon as we call z it refers and num gets printed