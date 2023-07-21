const prompt=require("prompt-sync")({sigint:true});

let a = prompt ("what is your age"); // prompt accepts only string type 
console.log(typeof a);
a=Number.parseInt(a) // converting the string to number
console.log(typeof a);
if(a<0){
    console.log("invalid age");
}
else if(a<18){
    console.log("not applicable age");
}
else
{
    console.log("you can dirve");
}



//point to be noted


// prompt() instructs the browser to display a dialog with an optional message prompting the user to input some text and to wait until the user either submits the text or cancels the dialog.

// However, prompt and window are not defined in the node environment. whenever we try to run this type of program in that type of environment, that time generates this reference type error.

// to use prompt in different environment 
//const prompt=require("prompt-sync")({sigint:true}); 
//we have to use this line 