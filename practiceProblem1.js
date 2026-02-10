/*
Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
*/

function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

const fahrenheit = celsiusToFahrenheit(6);
console.log(fahrenheit);

/*
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/

function countNumbers(array,find){
    let count = 0;
    for(const number of array){
        if(number === find){
            count += 1;
        }
    }
    return count;
}

const numbers = [5,6,11,12,98, 5, 5];
console.log(countNumbers(numbers,5));

/*
Task-3:
Write a function to count the number of vowels in a string.
*/

function countVowels(str){
    let count = 0;
    for(let char of str){
        char = char.toLowerCase();
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count += 1;
        }
    }
    return count;
}

const str = 'AeIoU';
console.log(countVowels(str));

/*
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

function findLongestWord(str){
    const emptyList = [];
    const words  = str.split(' ');
    for(const word of words){
        emptyList.push(word.length);
    }
    const index = emptyList.indexOf(Math.max(...emptyList));
    return words[index];
    
}

console.log(findLongestWord('I am learning Programming to become a programmer'));


/*
Task-5:
Generate a random number between 10 to 20.
*/

function generateRandomNumber(num1,num2){
    const randomNumber = Math.round(Math.random()*(num2 - num1) + num1);
    return randomNumber;
}

console.log(generateRandomNumber(10,20));