/*
writa a function called sumZero which accepts a sorted array
of integers. The function should find the first pair where
the sum is o. Return an array that includes both values that 
sum to zero or undeifned if the pair does not exist

sumZero([-3,-2,-1,0,1,2,3])// [-3,3]
sumZero([-2,0,1,3]) // undefined
*/

//!normal approach

function sumZero(arr){
    let arrRes=[]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        
        //as we are going to find the fist pair 
        if (arr[i]+arr[j]==0){
            arrRes.push(arr[i],arr[j])
        }
    }
}
return arrRes.slice(0,2)// only for the first occurance
}
console.log(sumZero([-3,-2,-1,0,1,2,3]));
