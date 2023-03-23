function countVowels(str){

    let vowel_counter = 0;
    for (let letter of str){
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
            vowel_counter++;
        }
    }

    return vowel_counter;
}

let sentence = 'the quick brown fox';
console.log(countVowels(sentence));