function extractUniqueChars(str){

    let unique_string = '';
    for (let i = 0; i < str.length; i++){
        if (!unique_string.includes(str[i])){
            unique_string += str[i];
        }
    }

    return unique_string;

}

let str = 'thequickbrownfoxjumpsoverthelazydog';
console.log(extractUniqueChars(str));
