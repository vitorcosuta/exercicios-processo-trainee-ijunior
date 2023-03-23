function putInAlphOrder(str){

    let word_letters = str.split('')

    let aux;
    for (let i = 0; i < str.length; i++){
        for (let j = i+1; j < str.length; j++){
            if (word_letters[j] < word_letters[i]){
                aux = word_letters[i];
                word_letters[i] = word_letters[j];
                word_letters[j] = aux;
            }
        }
    }

    /*
    We could reduce this entire code to:

    return str.split('').sort().join('');
    */

    return word_letters.join('');
}

let word = 'hinged'
console.log(putInAlphOrder(word))