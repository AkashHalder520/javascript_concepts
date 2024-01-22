// declaring objects
// this is a singleton object
const user= new Object()

user.name="rohan"
user.designation="SDE"
console.log(user,"asdf")
let a ={
    fname:`akash`,
    lname:`halder`,
    age:20,
    email:`akashhalder520@gmail.com`,
    "full name":`akash halder`,
    town:{
        city:"diamond harbour",
        Vill: "Roynagar"
    },
    salary :function(){
        return 25000
    },
    fullname:function(){
        return this.fname +" "+this.lname // this indicates the current object here its a
    },
    fulladdress:function(){
        return `city=${this.town.city} and vill=${this.town.Vill}`
    },
    hello:()=>{
        console.log(this.age);
        return this.age
    }
//  Arrow functions don't create their own this binding. They inherit this from the surrounding scope, which in this case is the global scope (where this refers to the window object).
// so we have to use normal function
}
console.log(a.fulladdress(),"fulladd")

// console.log(a.fullname());
// console.log(a.town);
// console.log(a.town.city);
// for (const key in a) {
//     console.log(a[key]);
// }

// if want to access the full name then
// console.log(a["full name"])// accessing the elements other than this way can not be done


// Object.freeze() is used to stop the executuon of object

a.email="abc@gmail.com"
// Object.freeze(a)
a.email="xyz@gmail.com"// this changes wont occure as we freez the object
// console.log(a);

a.newadd=()=>{
    console.log("newadd");

}
console.log(a.newadd());
