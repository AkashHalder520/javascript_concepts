/*Print the following series using while loop

1 4 9 16 25 36 …. n

Input :-

n = 49

Output :-

1

4

9

16

25

36

49

*/

let j =1
let n=49
while (j*j<=n){
    //  console.log(k)
     console.log(j*j)
    
j++}

    
    
    

/*Write a program to print the digits of a number .

Input:-

N - 153 .

output:-

3

5

1*/
function print_digits(n){
    /*Function to print the digits of the number n 
        Note Print all the digits in a new line*/
    let result
    while(n>0){
        result=n%10
        console.log(result)
        n=Math.trunc(n/10)
    }
    
    
}