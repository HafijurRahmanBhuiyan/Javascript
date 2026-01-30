let sentence = 'Hey mim, I love you so much.';
// console.log(sentence.split('').reverse().join(''));
// console.log(sentence.length);
reverse = ''
for(let i = sentence.length-1; i>=0; i--){
    reverse += sentence[i];
    
}
console.log(reverse);

rev = '';
for (const letter of sentence){
    rev = letter + rev;
}
console.log(rev);


