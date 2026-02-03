/*
Task-1:
Count how many times a string has the letter a
*/
// const str1 = 'I have a plane for you. If you agree with me, then I want to tell you something.';
const str1 = "aabaacaada"
let count = 0;
for(const i of str1){
    if(i === 'a'){
        count +=1;
    }
}
console.log(count);

/*
Task-2:
Count how many times a string has the letter a or A
*/
const str2 = 'Abu Bakar SiddiqueAa';
let countaOrA = 0;
for (const i of str2){
    if( i === 'a' || i === 'A'){
        countaOrA += 1;
    }
}
console.log(countaOrA);


/*
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/
const str3 = 'Aman gg ic Oil You ';
const str4 = str3.toLowerCase();
const vowel = ['a','e','i','o','u'];
let vowelCount = 0;
for( const i of vowel){
    if(str4.includes(i)){
        vowelCount += 1;
        // console.log(i);
    }
}
if (vowelCount === 5){
    console.log('All vowels are there');
}
else{
    console.log("Vowels are missing");
}




/*
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
*/
const str5 = 'You should be able to check whether x or X exists. After that, search online how to replace a character in a string.'
console.log(str5);
console.log('------------------')
const charArray = str5.split('');
for (const element of charArray){
    if(element === 'x'){
        charArray[charArray.indexOf(element)] = 'y';
    }
    else if( element === 'X'){
        charArray[charArray.indexOf(element)] = 'Y';
    }
}
console.log(charArray.join(''));



console.log('');
console.log('');


/*
Task-5:
Capitalize Every first Letter of each word in a String
*/

const str6 = 'amar sonar bangla, ami tomay valobashi. Amar o porane jaha chay.';
console.log(str6);
const str6Array = str6.split(' ');
// console.log(str6Array);
const newArray = [];

for (const word of str6Array){
    const wordArray = word.split('');
    wordArray[0] = wordArray[0].toUpperCase();
    // console.log(wordArray.join(''));
    newArray.push(wordArray.join(''));
}
console.log(newArray.join(' '));

