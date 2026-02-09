function inchToFeet(inch){
    const feetFraction  = inch / 12;
    const feet = parseInt(feetFraction);
    const remainingInch = inch % 12;
    const result = feet + ' ft ' + remainingInch + ' inch.';
    return result;
}

const sohanHeight = inchToFeet(69);
console.log(sohanHeight);


function meterToKilometer(metre){
    const kiloMetre = metre / 1000;
    return kiloMetre + ' km';
}

const rasta = meterToKilometer(1025);
console.log(rasta);