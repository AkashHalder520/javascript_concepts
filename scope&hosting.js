
function one() {
    const username = "akash"
    console.log("function one");
    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website); // error:- website not defined
    console.log("going to call function 2");
    two()
}

one()


// function two can access all thing from func one

// overview of hosting

function addOne(num){
    return num+1
}
function addTwo(num){
    return num+2
}
console.log(addOne(2));
console.log(addTwo(2)); 
// here both function are executing no problem

function addOne(num){
    return num+1
}

console.log(addTwo(2)); 

function addTwo(num){
    return num+2
}
console.log(addOne(2));

// in this format also no problem but 

function addOne(num){
    return num+1
}

console.log(addTwox(2)); // error cannot access before initisation

const addTwox =function (num){
    return num+2
}
console.log(addOne(2));

/* hoesting is a phenomenon in js by which we can access the variable and function even before initializing it */
