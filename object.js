function speed(x){
    return 5*x;
}

const subject = {
    name : 'Math',
    teacher : 'Sharmin Akter',
    examDate : '30 Feb, 2026',
    'chap ters' : ['One', 'Two', 'Three', 'Four', 'Five'],
    details : {
        totalMarks : 100,
        gainMarks : 76,
        grade : 'A+',
        isPassed : true
    },
    boost :  speed(7)
}
// dotted Notification. 
const income = subject.details.totalMarks;

console.log(subject.details.gainMarks);
console.log(subject.name);
console.log(subject.boost);
console.log(income);

// bracket Notification. 
console.log(subject['teacher']);
console.log(subject['chap ters']);
console.log(subject['chap ters'][1]);


// property added 
subject.group = 'Science';

console.log('-------------------');
// value updated 
subject.details.grade = 'B+';
subject['name'] = "Physics";
subject['chap ters'][1] = 2;
console.log(subject);

console.log('-------------------');
// keys 
 const keys =  Object.keys(subject);
 console.log(keys);
 const subKeys = Object.keys(subject.details);
 console.log(subKeys);

console.log('-------------------');
//  value 
const values  = Object.values(subject);
console.log(values);

// delete 
delete subject.boost;
console.log(subject);


// loop create in object. 
// for of = Array 
// for in = Object 
for (const prop in subject){
    console.log(prop, '=', subject[prop]);
    // console.log(subject[prop]);
}

console.log('-------------------');

const keys2 = Object.keys(subject);
console.log(keys2);

for (const key of keys2){
    console.log(key, ':', subject[key]);
}

console.log('-------------------');
console.log(subject['details']['totalMarks']);
subject['details']['totalMarks'] = 120;
const dt = subject['details']['totalMarks'];
console.log(dt);
subject.name = 'chemistry';
const element = subject.name;
console.log(element);

console.log('-------------------');

// different ways to declare object 

const obj1 = new Object(
    {
        brand : 'Apple',
        price : 150000,
        color : 'silver'
    }
);
console.log(obj1);

const obj2  = Object.create({
    
        brand : 'samsung',
        price : 80000,
        color : 'black'
    
});
console.log(obj2);