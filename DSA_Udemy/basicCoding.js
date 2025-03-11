//Write a code to count the letter in the sentence or word and return a object

function coutnWords(str){
    const result={};
    for(i=0;i<str.length;i++){
        let char=str[i];
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result
}
// console.log(coutnWords("my"));
 //frequcy counter patter basically compaing data or finding data

/*write a function "same", which accepts 2 arrays
function should return true if every value in the array
has its corresponding value squared in the second array.
The frequency of values must be same

same([1,2,3],[4,1,9])// true
same([1,2,30], [1,4]])//false
same([1,2,3,2],[9,1,4,4,4])//false we must also take care of the frequency
*/

function  same(arr1,arr2){
    for (i=0;i<arr1.length;i++) {
    //    if (!arr2.includes(arr1[i]*arr1[i])){
    //     return false
    //    }
    //    console.log(arr2);

    //   arr2= arr2.filter((item)=>item!==arr1[i]*arr1[i])// we cant use filter as it will remove multiple same values
    let indexStore=arr2.indexOf(arr1[i]*arr1[i])
        if (indexStore === -1) {
        return false; // Square not found
    }
    console.log(arr2); 
    arr2.splice(indexStore,1)// form the index it removing one element so that [9,1,4,4] one 4 doesnt gets counted for another

}
    return true
}

console.log(same([1,2,3,2],[9,1,4,4]));
//optimised approach 
/*two seperate loops are more better than two nested loops*/
