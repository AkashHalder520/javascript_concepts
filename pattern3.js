/*

*1111*
**111**
***11***
****1****
**********

 here 1 denotes space
*/ 

for(var i=1;i<=5;i++){
    var str =""
    for( var j=1;j<=i;j++){
        str=str+"*"
    }
    for(j=1;j<=5-i;j++){
        str=str+" "
    }
    for( var j=1;j<=i;j++){
        str=str+"*"
    }

    console.log(str);
}