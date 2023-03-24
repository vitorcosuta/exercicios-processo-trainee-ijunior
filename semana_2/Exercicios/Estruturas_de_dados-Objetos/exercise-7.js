// Virtually the same code as exercise-3's from Estrutura de Dados -> Funcoes

function generateSubsets(str){

    let subsets = [];

    for (let i = 0; i < str.length; i++){
        for (let j = i+1; j < str.length + 1; j++){
            subsets.push(str.slice(i, j));  // Intervalo do .slice() --> ]start, end[
        }
    }

    return subsets;
} 

let sample_word = 'koala';
console.log(generateSubsets(sample_word));