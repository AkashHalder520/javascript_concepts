// declaring objects
// this is a singleton object
const user= new Object()
console.log(user)

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
}
//empty "this" in browser depicts a window object

//object distructureing 

const {fname:xssss}=a // here xsss is a alias we can name fname as xsss
console.log(xssss);

