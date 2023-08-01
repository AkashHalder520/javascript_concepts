/*

1   *****
    *
****
**
***
***
**
****
*
*****

*/



for(var i=1;i<=10;i++){
    var str=""
    if(i%2!=0){
        for( j=1;2*j<=11-i;j++){
            str=str+"*"
        }
    }else{
           for( j=1; 2*j<=i;j++){
            
                str=str+"*"
            
           } 
    }
console.log(str)
}
