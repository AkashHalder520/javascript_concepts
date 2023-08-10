//write a function that takes an array of and returns a new array where each element is doubled.

let arr=[1,3,2,16,5,4,6,8]
let newarr=arr.map((item)=>{
    return item * 2
})
console.log(newarr);

//Create a function that takes an array of numbers and returns a new array containing only the even numbers

let newarr2=arr.map((item)=>{
    return item%2==0
})
// using filter
let newarr3=arr.filter(checkeven)
function checkeven(xyz){
if(xyz%2==0){
    return xyz
}
}
console.log(newarr3); //[2,4,6,8]


//)Implement a function that calculates the sum of all the elements in an array using the reduce function.

let newarr4=arr.reduce((item1, item2)=>{ //the reduce function redueces a array into a single value
    return item1+item2
})
console.log(newarr4); //29


//Write a function that finds the maximum value in an array of numbers using the reduce function.
let newarr5=arr.reduce((item1, item2)=>{
    return item1>item2 ?  item1 : item2
})
console.log(newarr5);


//Write a function that removes duplicate values from an array using the filter function.
let arr2=[1,4,3,4,6,2,9]
console.log(arr2.indexOf(4));
arr2.forEach((c, index) => {
    console.log(`${c} - ${index} - ${arr2.indexOf(c)}`);
});
/*
1 - 0 - 0
4 - 1 - 1
3 - 2 - 2
4 - 3 - 1
6 - 4 - 4
2 - 5 - 5
9 - 6 - 6
*/ 
let removedduplicate=arr2.filter((value,index)=>{
    if(arr2.indexOf(value)===index){// concept to store only the distinct value where index and indexof() values are equal
        return value
    }
})
console.log(removedduplicate);
// this can be done using map or for each 
let distinctval=[]// empty arrya
arr2.forEach((item)=>{
   
   if(!distinctval.includes(item)){// check with includes fucntion 
    distinctval.push(item)// push the element into empty array thats not present in the array  
   }
})
console.log(distinctval);


//Create a function that takes an array of objects and sorts them based on a specified property using the sort function.
let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    {
        "color": "green",
        "type": "station",
        "registration": new Date('2018-03-03'),
        "capacity": 8
      },
      {
        "color": "blue",
        "type": "wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 4
      },
]
let newarrobj=cars.sort((a,b)=>{
if(a.color>b.color)
return 1
else if(a.color<b.color)
return -1
else 
return  0
})
console.log(newarrobj); // we have to compare based on number so we return number

//Write a function that accepts any number of arguments and returns their sum using the rest parameter.
let sums=0
function sum(...arr){
    
    arr.forEach((item)=>sums=sums+item)
    console.log(sums);
}
sum(2,4,5)

//Create a function that takes any number of arguments (numbers) and calculates the average using the rest parameter.
let avg=0
let total=0
function average(...num){
num.forEach((item)=>{
     total=total+item; 
})
avg=total/num.length
return avg
}
console.log(average(1,5,6,6,7));

//Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

let max=-1
function maximum(...num){
num.forEach((item)=>{
    if(item>max){
        max=item 
    }  
})
return max
}
console.log(maximum(1,5,6,6,7,-4,-9));

//)Write a function that takes a variable number of arrays as arguments and returns a single array containing all the elements from the input arrays, using the rest parameter.

function joinarr(...arr){
    let newarr= arr.reduce((item1 ,item2)=>  item1.concat(item2))
console.log(newarr);
}
joinarr([11,4,3,2,3],[1,6,7,8,9,5])

//Implement a function that takes a variable number of string arguments and returns an array containing only the strings with a length greater than a specified value using the rest
function specifiedlen(...arr){
let newarr=arr.filter((item)=>{
    return item.length<=4
})
    console.log(newarr);
}
specifiedlen("akashsdf","asdgasdg","asdgasdg","asdg","asddfsdf","asde")