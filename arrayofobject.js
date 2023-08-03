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
        "capacity": 5
      },
      {
        "color": "blue",
        "type": "wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
      },
]
for (let x of cars){
    // console.log(x)
    // console.log(x.capacity)
    // console.log(x.color)
    // console.log(x.registration)
    // console.log(x.type)
}
for (let x in cars){
  // console.log(x); // only show the index
}
let xyz=cars.forEach((item)=>{ return item.color
  // console.log(item,"foreach");
})
// console.log(xyz);// undefined as foreach doesnot create any array

let opq=cars.map((item)=>{ return item.color
  // console.log(item,"map");
})
// console.log(opq);// it can return a new array

// to chaghe a element in the array of objects

// let indexarr=cars.findIndex((item)=>{
//   return item.color==="red"
// })
// cars[indexarr].capacity=20
// console.log(cars);


// if we dont want to manipulate the original array then use map to return new array

let newarr=cars.map((items)=>{
  // items.color==="green"?console.log("found green"):console.log("not found");
  items.color==="green"?{...items,"capacity":30}:items
})
console.log(newarr);