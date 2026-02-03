const num = [4,5,200,9,6,12,19,11];
const sort_asc = [...num].sort((a,b) => a-b);
console.log(sort_asc);

const sort_dsc = [...num].sort((a,b)=> b-a);
console.log(sort_dsc);