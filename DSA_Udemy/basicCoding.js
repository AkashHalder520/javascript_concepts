//Write a code to count the letter in the sentence or word and return a object

function coutnWords(str) {
  const result = {};
  for (i = 0; i < str.length; i++) {
    let char = str[i];
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
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

function same(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    //    if (!arr2.includes(arr1[i]*arr1[i])){
    //     return false
    //    }
    //    console.log(arr2);

    //   arr2= arr2.filter((item)=>item!==arr1[i]*arr1[i])// we cant use filter as it will remove multiple same values
    let indexStore = arr2.indexOf(arr1[i] * arr1[i]);
    if (indexStore === -1) {
      return false; // Square not found
    }
    console.log(arr2);
    arr2.splice(indexStore, 1); // form the index it removing one element so that [9,1,4,4] one 4 doesnt gets counted for another
  }
  return true;
}

// console.log(same([1,2,3,2],[9,1,4,4]));

//optimised approach
/*two seperate loops are more better than two nested loops
basically we will create 2 objects with unique elements and then compare
*/
function sameOptimised(arr1, arr2) {
  const obj1 = {};
  const obj2 = {};
  for (let i of arr1) {
    if (!obj1[i]) {
      obj1[i] = 1;
    } else {
      obj1[i] = obj1[i] + 1;
    }
  }
  for (let i of arr2) {
    if (!obj2[i]) {
      obj2[i] = 1;
    } else {
      obj2[i] = obj2[i] + 1;
    }
  } // separated all the elemets in different objects now we can compare the keys
  //   { '1': 1, '2': 2, '3': 1 }
  //   { '9': 1, '1': 1, '4': 2 }

  console.log(obj1);
  console.log(obj2);
  //   return Object.keys(obj1).every((data)=>{// in place of map use every to check every element
  //     const square= Number (data) * Number (data);
  //     console.log(obj2[square],obj1[data]);
  //     if(obj2[square]!==obj1[data]){
  //         return false
  //     }
  //     return true
  //   }) // without using inbuilt function

  for (const key in obj1) {
    const numKey = Number(key); // Convert key to number
    if (obj2[numKey * numKey] !== obj1[numKey]) {
      return false;
    }
    return true;
  }
}
// console.log(sameOptimised([1,2,3,2],[9,1,4,4]));

// for string

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  } else {
    const obj1 = {};
    const obj2 = {};
    //   const arr1=[];
    //   const arr2=[];
    for (let i = 0; i < str1.length; i++) {
      if (!obj1[str1[i]]) {
        obj1[str1[i]] = 1;
      } else {
        obj1[str1[i]] += 1;
      }
    }
    for (let i = 0; i < str2.length; i++) {
      if (!obj2[str2[i]]) {
        obj2[str2[i]] = 1;
      } else {
        obj2[str2[i]] += 1;
      }
    }

    console.log(obj1);
    console.log(obj2);
    // {a: 3, n: 1, g: 1, r: 1, m: 1}
    // {n: 1, a: 3, g: 1, r: 1, m: 1}
    for (let key in obj1) {
      // to get the keys
      if (obj1[key] !== obj2[key]) {
        return false;
      }
     
    }
    return true;
  }
}

console.log(validAnagram("anagram", "nagaram"));
