function secondGreatestLowest(arr){
    
    arr.sort((n1, n2) => {
        return n1 - n2;
    });
    let arr_size = arr.length;
    let second_greatest_index = 1;
    let second_lowest_index = arr_size - 2;
    console.log(arr);
    console.log(`The second greatest number is ${arr[second_greatest_index]} and the second lowest number is ${arr[second_lowest_index]}.`);
}

let numbers = [90, 52, 71, 3, 101]
secondGreatestLowest(numbers);
