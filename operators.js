//Arithmetic operator 

let a= 45
let b=5

console.log("a+b=", a+b);
console.log("a-b=",a-b);
console.log("a/b=",a/b);
console.log("a*b=",a*b);
console.log("a**b=",a**b);// ' ** ' means a^b 
console.log("a%b=",a%b);
console.log("++a=",++a);
console.log("a++=",a++);
console.log("--a=",--a);
console.log("a--=",a--);

// Assignment operator 

let number=1;
number +=5; //number= number+5
console.log(number);

number -=5;
console.log(number);

number *=5;
console.log(number);

number /=5;
console.log(number);

number **=5;
console.log(number);

//comparison operator

let comp1=107
let comp2="a"
console.log("comp1==comp2 is",comp1==comp2); 
console.log("comp1!=comp2 is",comp1!=comp2);
console.log("comp1===comp2 is",comp1===comp2);//if its exactly same or not
console.log("comp1==comp2 is",comp1!==comp2);
console.log("comp1>comp2 is",comp1>comp2);// greatter or less than doesnot cares about the type
console.log("comp1==comp2 is",comp1>100?"yes":"no"); // ternary operator

//logical operator 

let x=5
let y=6
console.log("Logical 'AND' operation ", x>1 && y==6);// in logical and both conditon should satisfy then its considered to be true
console.log("Logical 'OR' operation ", x>1 || y==6); // one condition is enough to be true
console.log(!true);
