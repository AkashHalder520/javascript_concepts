/*
**********
****  ****
***    ***
**      **
*        *

to pint pattern we can follow a formuls jend=i*diff + c

in this case we can divide tha pattern into 3 parts

for the first part

let i be the number of lines and j be a random value here 10 jend will be no.of stars 
like first star be 10 then 11 12 13 14 ...jend will be 14  

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
//2nd loop
for (var j = 10; j <=(2*i)+7 ; j++) {
    
   str=str+"1";// using 1 for the spaces 
   
  }
  for (var j = 10; j <=15-i ; j++) { // 3rd iteration will be same as first one 
    
   str=str+"*";
   
  }
   console.log(str);
    
}

/*

**********  10  9
****11****  10  11
***1111***  10  13 
**111111**  10  15
*11111111*  10  17

we denote the space by 1
for space we have to take another loop 
for that again we have to calculate for space

let i be the number of lines and j be a random value here 10 jend will be no.of space -1 + j

diff=+2

jend=diff*i+j
9=2i+c => c=7
jend= 2i+7
*/