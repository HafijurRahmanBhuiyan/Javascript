const today = new Date();
console.log(today);

const specificDate = new Date(2026, 3, 3);
console.log(specificDate.toLocaleString('en-GB'));

specificDate.setDate(5);
console.log(specificDate.toLocaleString('en-GB'));


specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));

specificDate.setFullYear(2015);
console.log(specificDate.toLocaleString('en-GB'));
