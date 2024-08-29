//promise is a object that represent the completion or failure of a asyncronous operation
// const promiseOne=new Promise(function(resolve, rejected){
// // mainly to do some async task
// setTimeout(function(){
//     console.log('async ');
//     resolve(12)
// },2000)

// })

// promiseOne.then(function(xx){
//     console.log(`promise consumed${xx}`);
// })

// // another example

// new Promise(function(resolve, regect){
//     setTimeout(function(){
//         console.log('async ');
//         resolve(12)
//     },2000)
    
// }).then(function(){
//     console.log(`promise consumed`);
// })

// another example
function loadingData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('loading data');
            resolve()
        },4000)
        
    })
}
function viewingData(){
    console.log('viewing data');
    
}
function updatingData(){
    console.log('updaing data');
    
}

loadingData().then(viewingData) // we should not call direct the function viewingData() 

// updatingData()


