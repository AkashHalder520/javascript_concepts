
function sum(name,...args) {
    let sum=0;
    for (const i in args) {
        sum=sum+args[i];
    }
    console.log(sum);
    console.log(`hello ${name}`);
 }

 sum(20,30)
 sum(40,50,60)
 sum("akash",40,50,60)


 function sum(...args) {
    let sum=0;
    for (const i in args) {
        sum=sum+args[i];
    }
    console.log(sum);
    
 }
 sum(40,50,60,20,30)