let str="javascript is a great language"
let length=str.length;
document.write("lenght of the string ==>",30,"<br/>")
let replace=str.replace("is", "are") // only replace the first occurance
let str2="       javascript is a great language     "
console.log(str2)
console.log(str2.trim());// trim is used to remove space from bigining or end

let q =str.includes("g")// its case sensative it returns true or false if any charecter or word is included in the given string 
console.log("includes===>",q);
//.startwith or .endwith check if the charecter or the word given is starting with or not returns true
let x=str.search("is")// it returns the index number of the word and returns -1 if not found
console.log(x);

let p=str.split(" ")//splits the entire string in an array for a given condition here space
console.log(typeof(p),p);

let y=str.slice(3,7)//(startindec,position)
console.log(str);
console.log("slice==>",y);

let t=str.substring(3,7)//(same as slice with very minute diff like negative number will be considered as zero)
console.log(str);
console.log("substring===>",t);

let e=str.substr(3,7)// (startindex,no.elemts to return)
console.log(str);
console.log("substr===>",e);
