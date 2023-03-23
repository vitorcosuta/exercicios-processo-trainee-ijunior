function isPerfectNumber(num){

    let counter = 0;
    // We cannot use i < Math.sqrt(num) because the proof says that there is a divisor of a composite number called n (>1)
    // that is less than n's root, but that does not mean that this divisor is the greatest divisor of n. For example:
    // 3 is a divisor of 6 (which is a perfect number) but is less than sqrt(6) = 2.44...
    for (let i = 1; i < num; i++){
        if (num % i == 0){
            counter += i;
        }
    }

    return true ? num == counter : false;
}

let number = 28;
if (isPerfectNumber(number)){
    console.log(`${number} is a perfect number.`);
}else{
    console.log(`${number} is NOT a perfect number.`)
}