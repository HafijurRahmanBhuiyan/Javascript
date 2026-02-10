let a = 5;
let b = 7;
console.log(a,b);
const temp = a;    //use temporary variable .
a = b;
b = temp;
console.log(a,b);


let x = 20;
let y = 10;
console.log(x,y);
[x,y] = [y,x];
console.log(x,y);