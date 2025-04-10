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
// console.log(sumZero([-3,-2,-1,0,1,2,3]));

//!optimised approach
// basically we will use two pointer approach
// one pointer will be at start and other at end
// if the sum is greater than 0 then we will move the end pointer to left
// if the sum is less than 0 then we will move the start pointer to right
// if the sum is equal to 0 then we will return the pair    


function sumZeroOptimised(arr){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let sum=arr[left]+arr[right]
        if(sum===0){
            return [arr[left],arr[right]]
        }else if(sum>0){
            right--
        }else{
            left++
        }
    }
    return undefined
}
// console.log(sumZeroOptimised([-3,-2,-1,0,1,2,3]));     

//another problem ... count unique values
/*
Implement a function called countUniqueValues which accepts 
example countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
countUniqueValues([1,2,3,4,5]) // 5
*/
function countUniqueValues(arr){
let pointer1=0; // pointer in the first element
let uniqueCounter=0;
// we need to check the empty also  as at last we are returning uniquecounter +1 
if (arr.length<=0){
    return 0
}
for(let pointer2=pointer1+1;pointer2<arr.length;pointer2++){  // as pointer 2 is moving so keepin it in for loop
    if(arr[pointer1]!==arr[pointer2]){
        uniqueCounter++
        pointer1=pointer2
    } 
}
return uniqueCounter+1 //when compare -1 0 -->1 and 0 1 --2 it will give 2 unique values  but i will skip the -1 as its also a unique value logically
}
console.log(countUniqueValues([-1,2,4]));
 