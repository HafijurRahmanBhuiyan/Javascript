const subject = 'Chemistry';
const book = 'chemistry'
if(subject === book){
    console.log("Match");
}
else{
    console.log("Does not match");
}

//use uppercase or lowercase function.

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("Match");
}
else{
    console.log("Does not match");
}

const water = 'water';
const liquid = 'water ';
if (water === liquid){
    console.log("True");
}
else {
    console.log("False");
}

// use trim function.

if (water.trim() === liquid.trim()){
    console.log("True");
}
else {
    console.log("False");
}

//use both function together.

const str1 = ' Math ';
const str2 = 'maTh';
if (str1.toLowerCase().trim() === str2.toLowerCase().trim()){
    console.log("Compare Result True");
}
else{
    console.log("Compare Result False");
}