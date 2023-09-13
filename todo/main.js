let addtaskinput= document.getElementById("addtaskinput");
let addtaskbutton=document.getElementById("addtaskbtn")

addtaskbutton.addEventListener('click',function(){
    let addtaskinputval=addtaskinput.value;
    let webtask= localStorage.getItem("localtask");
    if (webtask== null){
        taskobj=[];
    }
    else{
         taskobj=JSON.parse(webtask); // parse is used to get data in object form 
    }
    taskobj.push(addtaskinputval)
    localStorage.setItem("localtask",JSON.stringify(taskobj))// to set data in storage we have to store in form of a string
})

function showtask(){
    
}
//https://www.youtube.com/watch?v=aC6cp5D0bvA&t=538s