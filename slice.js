const address = 'Charitaluk';
const part = address.slice(3,7);
console.log(part);

const part2 = address.substring(3,7);
console.log(part2);

const sentence = 'I am a good and hardworking person.';
console.log(sentence.split(' '));

const fraction = [ 'I', 'am', 'a', 'good', 'and', 'hardworking', 'person.' ];
console.log(fraction.join(' '));
console.log(fraction.join('-'));

console.log(sentence.includes('w'));

const first = 'Hafijur';
const last = 'Rahman';

console.log(first.concat( last));
console.log(first.concat(' ').concat(last));
const fullName = first + ' ' + last;
console.log(fullName);