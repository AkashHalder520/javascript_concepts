//**! call another example */


function setusername(username){
    console.log("hi amaksh" ,username);
    
    this.username=username
}
function createUser(username, email, password){
 setusername(username)// without 'this'  this function will get called 
                    //but will refer to global object so we have to send 'this'
 this.eamil=email
 this.password=password
}

const data= new createUser("akash","akash@gmaol.com","123")
console.log(data);
 



//? the correct way to do this  //

function setusername2(username){
    console.log("hi amaksh" ,username);
    
    this.username=username
}
function createUser2(username, email, password){
 setusername2.call(this,username)
 this.eamil=email
 this.password=password
}

const datas= new createUser2("akash","akash@gmaol.com","123")
console.log(datas);

//**! bind another example */