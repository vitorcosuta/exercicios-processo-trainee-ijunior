function determineType(operand){
    return typeof operand;
}

let list = [1, 's', {name: 'Ruy', age: 34}, false];

for (let item of list){
    console.log(determineType(item))
}
