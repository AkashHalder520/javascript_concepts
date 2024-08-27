// A symbol represents a unique idnetifier

let sym=Symbol('id');
console.log(sym);

let obj={
    idx: 1,
    name: "xyz",
    [sym] : 'ccd',// to use sumbol in object we have to use [
}
console.log(obj);
for (const key in obj) {
    console.log(key);
    
}
const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols);
console.log(symbols.keys());

