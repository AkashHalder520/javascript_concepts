// let name={
//     firstname:"akash",
//     lastname: "halder",
//     printfullname:  function(){
//         console.log(this.firstname+ " " +this.lastname);

//     }  // we dont use function like this ......1
// }
// name.printfullname()
// let name2={
//     firstname:"ramesh",
//     lastname:"das"
// }

/**

** suppose we want to use the function from one object to another
like we want to print the namen of second object name2
so here the concept comes of function borowing 

call is used to invoke a function directly by passing the reference


**/

// name.printfullname.call(name2)

//1.. we mainly keep the function outside
let name = {
  firstname: "akash",
  lastname: "halder",
};
let name2 = {
  firstname: "ramesh",
  lastname: "das",
};
function printfullname(data) {
    console.log(data);
    
  console.log(this.firstname, " ", this.lastname);
}

 //printfullname.call(name,"westbangal","myfriend"); // in call we can pass value like this
/**
 * apply is also same as call  but it takes the second arugment as a arraylisr
 */
printfullname.apply(name2,['hello my frind', 'how are you'])


/** bind method directly doesnt invoke the method it gives a copy 
 * and we can invoke it later
 */
// let printx= printfullname.bind(name2)
// printx()