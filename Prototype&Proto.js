let obj={
    fname:"john"
}
let obj2={
    lname:"doe"
}
// console.log( obj2.fname); // not possible 


obj2.__proto__=obj 
console.log(obj2.fname);


/* 
//* actually setting obj as the prototype of obj2. This means that obj2 will inherit properties from obj.

//*The __proto__ property is an internal property (sometimes called a "magic" property) that references the prototype of the object. When you set obj2.__proto__ = obj, you are telling JavaScript that if a property is not found directly on obj2, it should look up the property chain to obj to find it.

*/