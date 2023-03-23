function toTitleCase(str){

    let sentence = str.toLowerCase();
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++){
        let titledWord = words[i].split('');
        titledWord[0] = titledWord[0].toUpperCase();
        words[i] = titledWord.join('');
    }
    
    return words.join(' ');
}

let sentence = 'the green fox'

console.log(toTitleCase(sentence));