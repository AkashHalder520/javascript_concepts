const buttons=document.querySelectorAll('.button')
// gettin all the buttons
const body= document.querySelector("body")
buttons.forEach((button)=>{

button.addEventListener('click',(event)=>{
    console.log(event.target.id);
    if (event.target.id=== 'grey')
    {
        body.style.cssText="background-Color : grey ;"
    } 
    if (event.target.id === 'white') {
        body.style.backgroundColor = event.target.id;
      }
      if (event.target.id === 'blue') {
        body.style.backgroundColor = event.target.id;
      }
      if (event.target.id === 'yellow') {
        body.style.backgroundColor = event.target.id;
      }
})
    // console.log(button);
})
