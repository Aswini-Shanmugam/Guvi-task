//Do the below programs in anonymous function within IIFE

//a. Print odd numbers in an array
var arr=[1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10];
(function(arr){
    for(var i = 0 ; i< arr.length ; i++){
          if(arr[i]%2!=0){
             console.log(arr[i]);
          } 
     }
  })(arr);


  //b. Convert all the strings to title caps in a string array
  (function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
})(str);


//c. Sum of all numbers in an array
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
(function (a){
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
})(a);


//d. Return all the prime numbers in an array
let n=34;
(function (n){
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
})(n);


//e. Return all the palindromes in an array
(function (arr, n){
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    })(arr,n)


//g. Remove duplicates from an array
var array=[1,1,2,3,4,5];
(function (array){
   let dup = [...new Set(array)];
   return(dup);
 })(array);

 
 //h. Rotate an array by k times
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
})
(Array, N, K);
    