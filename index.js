console.time('your code took')//how much time it takes (start code)
console.log('hello console');
console.log(4+6);
console.log(true);
console.log([1,5,6,8,9]);//array
console.log({akash:'this', marks:34});//object syntax
console.table({akash:'this',marks:34 });//shows object in tabular form
console.warn("this is a warning");//shows warning in consol
// console.clear()
console.timeEnd('your code took')// end code for time
console.assert(500<189, 'age > 189 is not possible');//check a condition and return false given statement
console.error('this is an error');//to create a error

const a1 = {
    name: "Harry",
    section: 1,
    isPrincipal: false
  }
  a1.name= "akash"
  console.log(a1);