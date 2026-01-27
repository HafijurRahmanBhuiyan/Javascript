let Numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(Numbers.length);

console.log('');
console.log('');

console.log('Even Number Print');
for (let i = 0; i < Numbers.length; i += 2){
    console.log(Numbers[i]);
}

console.log('');
console.log('');

console.log('Odd Number Print');
let j = 1;
while(j < Numbers.length){
    console.log(Numbers[j]);
    j += 2;
}

console.log('');
console.log('');

for (let num of Numbers){
    if(num%2 === 0){
        console.log("Even number: ",num);
    }
    else{
        console.log("Odd number: ",num);
    }
}

console.log('');
console.log('');

let even = [];
let odd = [];
for (let num of Numbers){
    num%2 === 0 ? even.push(num) : odd.push(num);
}

console.log("Even numbers list: ",even);
console.log("Odd numbers list: ",odd);
