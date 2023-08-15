
let Update = "red"; 
let updatedObjects = cars.map(obj => {
  if (obj.color === Update) {
    return {
      ...obj, 
      color: "Safron",
      type: "updated type"
    };
  }
  return obj; 
});

console.log(updatedObjects,"new");
console.log(cars); 
