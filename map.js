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

let objS={
    color: "red",
      type: "station wagon",
      registration: new Date('2018-03-03'),
      capacity: 5
}

cars.map((item)=>{
    console.log(item);
})
// objS.map((item)=>{
//   console.log(item);
// })  can not execute as it is not a array

//map method is only used to iterate through array. and it returns a new array
// foreach does not return any array