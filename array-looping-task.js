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


/*
Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]
*/

const input = [1, 2, 3];
const emptyInput = [];
for (const i of input){
    if(input.indexOf(i) === 0){
        emptyInput.push(99);
    }
    else{
        emptyInput.push(i);
    }
}
console.log('Original:', input, 'Copy:', emptyInput);


console.log('');
console.log('');

/*
Task 6
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
*/

const student = {
    array : [
        { name: "John", marks: 85 },
        { name: "Alice", marks: 90 }
    ]
}

for(const i of student['array']){
    console.log(i['name'], 'scored', i['marks']);
}


// console.log(student['array'][0]['name'], 'scored', student['array'][0]['marks']);
// console.log(student['array'][1]['name'], 'scored', student['array'][1]['marks']);



/*
Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]
*/

console.log('');
console.log('');

const array = [
    [1, 2],
    [3, 4],
    [5, 6]
]

// console.log(array[2][1]);

array[1][0] = 99;
console.log(array);

