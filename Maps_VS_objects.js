const personObject={
    name: "dom",
    age:35,
    occpation:"software Developer",
    34:'sdfsdf'// 34 is not number its acting like a string
}
console.log(personObject[34]);// we cant use . operatior to 
//retrive the value

// class map
const personMap= new Map([
    ["name", "dom"],
    [1,"one"],
    [true,'its a true']// true being set a bollean
])
console.log(personMap);

 personMap.set("age",35)
 console.log(personMap,"kkjjk");
 console.log(personMap.get(true));
 
 // to get keys in map

 console.log(personMap.keys());
 // to delete
//  personMap.delete()

// to iteerate through map

personMap.forEach((value,key)=>{
    console.warn(key ,':' , value);
    
})

 // object has limitation 
 /*object key can be only of string but map can be of 
 any type 

 map is a advance object with new features and better performace
 map has more features than object 
 suppose if we want to find the size of the object 
 then we have to use loop but for map we can use 
 .size
 */