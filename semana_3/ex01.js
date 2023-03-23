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

function encontrarDoisMaiores(lista_numeros){
    lista_numeros.sort();
    let dois_maiores = [], tamanho = lista_numeros.length;
    let maior_numero_1 = lista_numeros[tamanho-1];
    dois_maiores.push(maior_numero_1);

    let maior_numero_2 = lista_numeros[tamanho-2];
    let iterador = tamanho-3;
    
    // Precisamos de um while para descartar valores repetidos
    while(maior_numero_1 == maior_numero_2 && iterador >= 0){
        maior_numero_2 = lista_numeros[iterador];
        iterador--;
    }

    dois_maiores.push(maior_numero_2);
    return dois_maiores;
}

function ehPrimo(num){

    if (num < 2) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(num); i++){
        if (num % i == 0){
            return false;
        }
    }

    return true;
}

function contarVogais(str){

    let cont_A = 0, cont_E = 0, cont_I = 0, cont_O = 0, cont_U = 0;

    for (let letra of str.toLowerCase()){
        if (letra == 'a'){
            cont_A++;
        }
        if (letra == 'e'){
            cont_E++;
        }
        if (letra == 'i'){
            cont_I++;
        }
        if (letra == 'o'){
            cont_O++;
        }
        if (letra == 'u'){
            cont_U++;
        }
    }

    const vogais = {
        a: cont_A,
        e: cont_E,
        i: cont_I,
        o: cont_O,
        u: cont_U
    }

    return vogais;
}


//Teste da funcao ehPalindromo
let string_1 = 'Kayak';
ehPalindromo(string_1) ? console.log(`A string '${string_1}' eh palindromo.`) : console.log(`A string '${string_1}' nao eh palindromo.`);


// Teste da funcao encontrarDoisMaiores
let lista_1 = [2, 6, 1, 1, 9, 9];
let string_2 = 'Os maiores numeros da lista [';

for (let num of lista_1){
    string_2 += ` ${num} `;
}

let dois_maiores = encontrarDoisMaiores(lista_1);
console.log(string_2 + `] sao ${dois_maiores[0]} e ${dois_maiores[1]}.`);


// Teste da funcao ehPrimo
let num_1 = 7;
ehPrimo(num_1) ? console.log(`O numero ${num_1} eh primo.`) : console.log(`O numero ${num_1} nao eh primo.`);


// Teste da funcao contarVogais
let string_3 = 'sequoia';
let ocorrencia_vogais = contarVogais(string_3);
console.log(`Ocorrencia das vogais na palavra '${string_3}':`);

console.log(ocorrencia_vogais);