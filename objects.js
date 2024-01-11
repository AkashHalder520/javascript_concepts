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
    }
}
// console.log(a.fullname());
// console.log(a.town);
// console.log(a.town.city);
for (const key in a) {
    console.log(a[key]);
}
// if want to access the full name then
console.log(a["full name"])// accessing the elements other than this way can not be done