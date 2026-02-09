function fanOff(){
    console.log('walk towards to the switch');
    console.log('Turn of the switch of the Fan');
}

console.log('--------------------');
console.log('--------------------');

fanOff();


function square(number){
    console.log(number**2);
}

square(12);

function add(a,b){
    const sum = a + b;
    console.log(sum);
}

add(7,5);


function addAll(a,b,c,d){
    const sum = a+b+c+d;
    console.log(sum);
}

addAll(4,6,8,2);

function difference(num1 , num2){
    const diff = num1 - num2;
    // console.log('The age difference is:',diff);
    return 'the age difference is:', diff;
}

const fatherAge = 40;
const myAge = 25;

const output1 = difference(35,25);
console.log('output1 is:',output1);

console.log('--------------------')
const output2 = difference(fatherAge, myAge);
console.log("output2 is:",output2);



function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}


console.log(isEven(5));
console.log(isEven(10));

function doDoubleOrTriple(number , doDouble){
    if(doDouble){
        return number*2;
    }
    else {
        return number*3;
    }
}

console.log(doDoubleOrTriple(5,true));
console.log(doDoubleOrTriple(4,false));

function evenSizedStr(str){
    if(str.length % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(evenSizedStr('Dhaka'));
console.log(evenSizedStr('Faka'));


function sumAllNumbers(array){
    let sum = 0;
    for(const number of array){
        sum += number;
    }
    return sum;
}

const list = [5,3,2];
const list1 = [5,3,5];
console.log(sumAllNumbers(list));
console.log(sumAllNumbers(list1));

