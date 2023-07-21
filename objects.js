let a ={
    fname:`akash`,
    lname:`halder`,
    age:20,
    email:`akashhalder520@gmail.com`,
    town:{
        city:"diamond harbour",
        Vill: "Roynagar"
    },
    salary :function(){
        return 25000
    },
    fullname:function(){
        return this.fname +" "+this.lname // this indicates the current object here its a
    }
}
console.log(a.fullname());
console.log(a.town);
console.log(a.town.city);