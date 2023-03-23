function ehPalindromo(str){

    let j = str.length - 1;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++){
        if (str[i] != str[j]){
            return false;
        }
        j--;
    }

    return true;
}


//Teste da funcao 
let string1 = 'Kayak';
ehPalindromo(string1) ? console.log(`A string '${string1}' eh palindromo.`) : console.log(`A string '${string1}' nao eh palindromo.`);