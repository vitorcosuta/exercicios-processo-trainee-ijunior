function isPalindrome(str){

    let i = 0;
    let j = str.length - 1;

    while (j > i){
        if (str[i] != str[j]){
            return false;
        }
        j--;
        i++;
    }

    return true;
}

let word = 'kayak';

if(is_palindrome(word)){
    console.log(`The word ${word} is a palindrome.`)
}else{
    console.log(`The word ${word} is NOT a palindrome.`)
}