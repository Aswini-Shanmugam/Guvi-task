// Do the below programs in arrow functions.

//a. Print odd numbers in an array
var array=[1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10];
var array ()=>{
    for(var i = 0 ; i< arr.length ; i++){
          if(arr[i]%2!=0){
             console.log(arr[i]);
          } 
     }
  }(arr);



//b. Convert all the strings to title caps in a string array
var str="aswini";
let fn= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(fn(str));


//c. Sum of all numbers in an array
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let num=(a)=>{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(num(a));


//d. Return all the prime numbers in an array
let n=34;
let l=(n)=>{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(n));


//e. Return all the palindromes in an array
Palindrome = (arr, n) =>{
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
