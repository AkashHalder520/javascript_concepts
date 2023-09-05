// get element by id

const title=document.getElementById('main-heading');
// console.log(title)

//get element by classname
const list=document.getElementsByClassName('list-item');
console.log(list);//retunrs HTMLcollection 

//get element by tagname
const listitem=document.getElementsByTagName('li')
console.log(listitem);// returs htmlcollection similar to classname

//queryselector
const container=document.querySelector(`.list-item`)
console.log(container); // using query selector we can select any thing and returs the first occurance
//queryselectrer all for all selection