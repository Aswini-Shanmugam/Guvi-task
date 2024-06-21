//JSON, iterate over all for loops (for, for in , for of, for Each)

// for
var numb = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numb.length; i++) {
   console.log(numb[i])
}


// for in
var num = [20 ,30 ,5 ,2 ];
for (var x in num) {
 console.log(x);
}


// for of
var num = [2, 3, 5, 2];
for (var x of num) {
 console.log(x);
}


// for each
var num = [2, 3, 5, 2];
num.forEach(function (value, index) {
 console.log("Element ===>", value, index);
});
