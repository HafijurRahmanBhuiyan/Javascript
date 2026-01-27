/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

for(let sl = 1; sl <= 200; sl++){
    if(sl === 100){
        break;
    }
    console.log(sl);
}

console.log('');
console.log('');

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let sum = 0;
let i = 1;
while(true){
    sum = sum + i;
    if(sum >= 100){
        break
    }
    console.log(sum);
    i++;
}

console.log('');
console.log('');

let sum2 = 0;
let i2 = 1;
while(true){
    sum2 = sum2 + i2;
    if(sum2 >= 100){
        break
    }
    i2++;
}
console.log('Final sum:',sum2);

console.log('');
console.log('');

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/


for(let num = 1; num<=100; num++){
    let num2 = 2;
    while(num2<=num){
        if(num**(1/2) === num2){
            break;
        }
        num2++;
    }
    if(num**(1/2) === num2){
        break;
    }

    console.log(num);
    
}


// easy way 

console.log('');
console.log('');

for(let number = 1; number<=100; number++){
    let square = Math.sqrt(number);
    if(Number.isInteger(square) === true){
        break;
    }
    console.log(number)
}


