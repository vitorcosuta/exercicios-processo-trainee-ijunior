function isPrime(num){
    
    for (let i = 2; i < Math.sqrt(num); i++){
        if (num % i == 0){
            return false;
        }
    }

    return true;
}

let number = 29;

console.log(isPrime(number));
