/*
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// console.log(colors.reverse());
const newColors = [];
for (const color of colors){
    newColors.unshift(color);
}
console.log(newColors);
console.log('------------------------');
const newColors2 = [];
const length = colors.length;
console.log(length);
for( let i = 0; i < length ; i++){
    newColors2.push(colors.pop());
}
console.log(newColors2);
// console.log(colors);

/*
Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 78, 46]
*/

const numbers = [12, 98, 5, 41, 23, 78, 46];
const newNumbers = [];
for(const num of numbers){
    if(num%2 === 0){
        newNumbers.push(num);
    }
}
console.log(newNumbers);

/*
Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/

const string = ['Tom', 'Tim', 'Tin', 'Tik'];
let newString = '';
for (const str of string){
    newString = newString + str;
}
console.log(newString);

/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/
const statement = 'I am a hard working person'
const newStatement  = statement.split(' ');
let emptyString = '';
for (const state of newStatement){
    emptyString = state + ' ' + emptyString;
}
console.log(emptyString);
