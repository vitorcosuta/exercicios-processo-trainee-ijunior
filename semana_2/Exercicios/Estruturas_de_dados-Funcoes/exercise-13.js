function computeFactors(num){

    let str = `Factors of ${num} : `
    for (let i = 0; i <= num; i++){
        if (num % i == 0){
            str = str.concat(`${i} `);
        }
    }

    return str;
}

let number = 8;
console.log(computeFactors(number));