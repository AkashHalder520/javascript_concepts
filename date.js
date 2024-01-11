//Dates 

 let myDate  = new Date()
 console.log(myDate.toDateString());// Wed Jan 10 2024
 console.log(myDate.toLocaleString());// 10/1/2024, 10:34:07 pm
 console.log(typeof myDate); // object

 // to create a specific date

 let myCreatedDate= new Date(2023,0,23)
 console.log(myCreatedDate.toLocaleString());// 23/1/2023, 12:00:00 am


 // for example to check the time stamps 
 let myTimeStamps= new Date.now()
 