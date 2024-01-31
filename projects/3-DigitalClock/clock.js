const clock =document.querySelector('#clock')

// to get date 

let date = new Date()
console.log(date.toLocaleTimeString());

//setinterval(function(){},1000) function is used to run a perticular fumntion in a cetiain inerval

setInterval(()=>{
    let date = new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000)

