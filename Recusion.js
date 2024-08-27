function printNumber(length){
if (length>=0) {
    console.log(length);
    printNumber(length-1)
}
}
// printNumber(10)

// factoria,

function factorial(num){
    if( num == 1 || num == 0) return 1;
if(num>1){
    return num*factorial(num-1)
}
}
console.log(factorial(6));
 