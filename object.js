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