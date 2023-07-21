function sum(){
console.log(arguments); //arguments can be used to get all parameter with different size

}
 
 //sum of numnber

//  function sum() {
//     let sum=0;
//     for (const i in arguments) {
//         sum=sum+arguments[i];
//     }
//     console.log(sum);
//     console.log(typeof(sum));
//  }
 
// here we can clearly notice the difference in the out put while using rest operator
//  function sum(name,...args) {
//     let sum=0;
//     for (const i in args) {
//         sum=sum+args[i];
//     }
//     console.log(sum);
//     console.log(`hello ${name}`);
//  }
//  sum(20,30)
//  sum(40,50,60)
 sum("akash",40,50,60)