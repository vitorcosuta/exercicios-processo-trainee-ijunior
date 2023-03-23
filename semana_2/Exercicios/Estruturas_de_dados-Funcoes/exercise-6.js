function findLongestWord(str){
    
    let sentence = str.split(' ');
    let longest_word = sentence[0];

    for (let word of sentence){
        if(word.length > longest_word.length){
            longest_word = word;
        }
    }

    return longest_word;
}

let sentence = 'the green fox isndaadsnias';
console.log(findLongestWord(sentence));
