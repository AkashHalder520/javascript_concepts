/* subarray is a part of an array with continuity
[1,2,3,4,5]=>[1],[1,2] ......[2],[2,3]... are subarray but [2,5] not 
subarray as no continuity


Q) [1,2,3,4,5]
to print all the sub array 
1
12
123
1234
12345
2
23
234
2345
3
34
345
4
45
5
*/
function print_subarray(arr){
    /*Function to print all the subarrays given in an array
    Input arr--> array, length -->length of an array */

for (var i=0;i<arr.length;i++){
    for(var j=i; j<arr.length;j++){
        var akk=[]
      for(var k=i; k<=j;k++){
      
     akk.push(arr[k])
      
          
      }
      console.log(akk.join(''))
    }
}
    
    
    
}