let fruits = ["Orange", "Apple", "Banana", "Mango", "Watermelon"];
console.log(fruits);
for(const fruit of fruits){
    console.log(fruit);
}
console.log('');
console.log('');

fruits.push("Jackfruits");
console.log(fruits)

console.log('');
console.log('');

fruits.pop();
console.log(fruits);

console.log('');
console.log('');

console.log(Array.isArray(fruits));
console.log('');
console.log('');
console.log(fruits.indexOf("Mango"));
console.log(fruits.indexOf("Apple"));
console.log(fruits.includes("Apple"));

let color = ["red", "Black", "Yellow", "White"];

let concatenation = fruits.concat(color);
console.log(concatenation);
console.log(fruits.join("-Sohan-"));
console.log('');
console.log('');
console.log(concatenation.slice(2,6));

console.log(fruits[2]);
