function convertToCoins(amount, coin_arr){

    let coins = [];

    //Sorting the coin values array in descending order
    coin_arr.sort((n1, n2) => {
        return n2 - n1;
    });

    coin_arr.forEach(coin_value => {
        let num_of_coins = Math.floor(amount/coin_value);
        coins.push(num_of_coins);
        amount -= (coin_value * num_of_coins);
    });

    coins.forEach((coin_tally, index) => {
        if (coin_tally != 0){
            console.log(`${coin_tally} x ${coin_arr[index]}`);
        }
    });
}

let amount = 89;
let available_coins = [25, 10, 5, 2, 1];

convertToCoins(amount, available_coins);

