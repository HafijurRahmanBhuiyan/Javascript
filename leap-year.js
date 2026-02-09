function leapYear(year){
    if(year % 100 === 0 && year % 400 === 0){
        return year + " is leap year.";
    }
    else if(year % 100 !==0 && year % 4 === 0){
        return year + " is leap year."; 
    }
    else{
        return year + " is not leap year.";
    }
}

const year = leapYear(2023);
console.log(year);