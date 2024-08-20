let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "green",
    type: "station",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "blue",
    type: "wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];
for (let x of cars) {
  // console.log(x)
  // console.log(x.capacity)
  // console.log(x.color)
  // console.log(x.registration)
  // console.log(x.type)
}
for (let x in cars) {
  // console.log(x); // only show the index
}
let xyz = cars.forEach((item) => {
  return item.color;
  // console.log(item,"foreach");
});
// console.log(xyz);// undefined as foreach doesnot create any array

let opq = cars.map((item) => {
  return item.color;
  // console.log(item,"map");
});
// console.log(opq);// it can return a new array

// to chaghe a element in the array of objects

// let indexarr=cars.findIndex((item)=>{// find index returns the index
//   return item.color==="red"
// })
// cars[indexarr].capacity=20
// console.log(cars);


// if we dont want to manipulate the original array then use map to return new array

// let Update = "red";
// let updatedObjects = cars.map(obj => {
//   if (obj.color === Update) {
//     return {
//       ...obj,
//       color: "Safron",
//       type: "updated type"
//     };
//   }
//   return obj;
// });

// console.log(updatedObjects,"new");
// console.log(cars);


// if we want to destructure from array of objects

const [{ color: color1 }, { color: color2 }, { color: color3 }, { color: color4 }] = cars; // agter colon: this are the for naming convention 

console.log(color1); // purple
console.log(color2); // red
console.log(color3); // green
console.log(color4); // blue