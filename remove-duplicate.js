function removeDuplicate(array){
    console.log(array);
    console.log(' ')
    for (let i = 0; i < array.length-1; i++){
        for(let j = i+1; j < array.length; j++){
            if( array[i] === array[j]){

                array.splice(j,1);  //for delete specific index value.

            }
        }
    }
    console.log(array);
}


const array  = [12, 13, 12, 14, 17, 12, 15,15,16,17];
removeDuplicate(array);



function uniqueArray(list){
    console.log(list);
    const unique = [];
    for(const element of list){
        if(unique.includes(element) === false){
            unique.push(element);
        }
    }
    console.log(unique);
}

const list = [12, 13, 12, 14, 17, 12, 15,15,16,17];
uniqueArray(list)