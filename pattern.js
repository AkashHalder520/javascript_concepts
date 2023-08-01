/*
**********
****  ****
***    ***
**      **
*        *

to pint pattern we can follow a formuls jend=i*diff + c

in this case we can divide tha pattern into 3 parts

for the first part

let i be the number of lines and j be a random value here 10 jend will be no.of stars -1 +initial j

diff = -1 as its decreasing by one
1 ***** 10  14  
2 ****  10  13
3 ***   10  12
4 **    10  11
5 *     10  10

jend= i*diff+c
14=1*-1+c 
c=14+1=15

so jend= -1*i+15 => -i+15  === 15-i

*/

for (var i = 1; i <=5 ; i++) {
   var str=""
   for (var j = 10; j <=15-i ; j++) {
    
    str=str+"*";
    
   }

   console.log(str);
    
}

/*

**********
****11****
***1111***
**111111**
*11111111*

we denote the space by 1

*/