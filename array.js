// normal methord

let arr=[10,20,30,40]
var sum=0
for(let a=0;a<4;a++){
     sum= sum+arr[a];
    }
document.write("total sum="+sum)

// another way to create array

let ary = new Array();
for(let a=0;a<4;a++){
    ary[a]=prompt("enter the values")
   }
document.write("<ul>")
for(let a=0;a<4;a++){
document.write("<li>"+ary[a]+"</li>")}
delete ary[0]// when deleteing the element gets deleted but the memory doesnt deleted
document.write("after delete")
for(let a=0;a<4;a++){
    document.write("<li>"+ary[a]+"</li>")}
    
document.write("<ul>")

