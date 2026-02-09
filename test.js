//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    if(typeof(currentPrice) === 'number' && typeof(discount) === 'number' && discount >= 0 && discount <= 100){
        const disc = currentPrice*discount/100;
        currentPrice = currentPrice - disc;
        return currentPrice.toFixed(3);
    }
    else{
        return 'Invalid';
    }
}
console.log(newPrice('1500',20));


//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if(typeof(otp) === 'string'){
        if(otp.length === 8 && otp.startsWith('ph-')){
            return true;
        }
        else{
            return false;
        }
    }
    return 'Invalid';
}
console.log(validOtp('ph-12345'));
console.log(validOtp('abc-12345'));
console.log(validOtp(['ph-12345']));


//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    const total = omr.right + omr.wrong + omr.skip;
    if(total === 100){
        const sum = (omr.right*1) - (omr.wrong*0.5);
        return Math.round(sum);
    }
    else{
        return 'Invalid'
    }
}

console.log(finalScore({"right":67,"wrong":23,"skip":10}))


//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    let haVote = [];
    let naVote = [];
    if(Array.isArray(array)){
        for( const vote of array){
            if(vote === 'ha'){
                haVote.push(vote);
            }
            else{
                naVote.push(vote)
            }
        }
        if(haVote.length > naVote.length){
            return true;
        }
        else if(haVote.length === naVote.length){
            return 'equal';
        }
        else{
            return false;
        }
    }
    return 'Invalid'
}
console.log(gonoVote(["ha","na","ha","na"]));



//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
        const wordLength = [];
    if(typeof(str) === 'string' && str.length !== 0){
        const wordList = str.split(' ');
        const wordJoin = wordList.join('');
        for( const word of wordList){
            wordLength.push(word.length);
        }
        const max = Math.max(...wordLength);
        const index = wordLength.indexOf(max);
        const result = {
            longwords: wordList[index],
            token: wordJoin.length 
        }
        return result;
    }
    return 'Invalid';
}
console.log(analyzeText("I am a little honest person"))