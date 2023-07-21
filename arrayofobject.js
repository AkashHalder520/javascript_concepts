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
  console.log(x); // only show the index
}
let xyz=cars.forEach((item)=>{ return item.color
  // console.log(item,"foreach");
})
// console.log(xyz);// undefined as foreach doesnot create any array

let opq=cars.map((item)=>{ return item.color
  // console.log(item,"map");
})
// console.log(opq);// it can return a new array
