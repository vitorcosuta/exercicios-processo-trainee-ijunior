function findAllMethods(obj){
    return Object.getOwnPropertyNames(obj).filter((property) => {
        return typeof obj[property] == 'function';  // Verifica qual o tipo de cada chave do objeto
    })
}

console.log(findAllMethods(Array));
console.log(findAllMethods(Math));
