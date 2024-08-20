let arr =[
    ["john",30],
    ["Thomas",25],
    ["Martin",56]
]
console.log(arr);//

// to access Thomas 
console.log(arr[1][0]); // Thomas

// print all values of the Multi dimention array
arr.forEach(data=>{
    data.forEach(value=>{
        console.log(value);
        
        
    })
})

