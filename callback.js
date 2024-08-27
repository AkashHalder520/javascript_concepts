// a callback fucnt is a function passed as an argument to another function
// a higher order function which takes another function as an argument

const addition = (a, b) => a + b;

const subtraction = (a, b) => a - b;

const calculator = (a, b, operation) => {
  // this is higer order funtion  as it is accepting another function as argument(add or subtract)
  return operation(a, b);
};

const addresule = calculator(5, 5, addition); //passing the addition function as an argument called call back
console.log(addresule, "add");
const subresule = calculator(5, 5, addition);
console.log(subresule, "sub");

// callback hell\

function loadingData(callback) {
  console.log(callback);

  //   console.log("1->loading data....");

  // suppose we add a set time out here so then the order will ger diturbed ...1st point
  setTimeout(() => {
    console.log("1->loading data....");
    callback();
  }, 3000);

  // so we can use call back to solve this problem ........2nd point
}
function collectingData() {
  console.log("2->collecting data");
}

function approvingData(callback2) {
  //suppose here also one set time out then again we have to use callback...3rd
  setTimeout(() => {
    console.log("3->approvingData data");
    callback2();
  }, 2000);
  // console.log("3->approvingData data");
}

function approved() {
  console.log("4->approved data");
}

loadingData(function () {
  collectingData();
  approvingData(function () {
    approved();
  });
}); // passing the function

// collectingData();
// approvingData();
// approved();
