function BubbleSort(arr){

    let aux;
    for (let i=0; i < arr.length; i++){
        for (let j=0; j < arr.length-1; j++){
            if (arr[j] > arr[j+1]){
                aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
    }

    return arr;
}

let sample_arr = [6, 4, 0, 3, -2, 1]; 

// Printing before bubble sort
let str = `Array before sorting: [`

sample_arr.forEach((num) => {
    str += ` ${num} `;
});

str += `]`;

console.log(str);

// Printing after bubble sort
str = `Array after sorting: [`

BubbleSort(sample_arr).forEach((num) => {
    str += ` ${num} `;
});

str += `]`;

console.log(str);