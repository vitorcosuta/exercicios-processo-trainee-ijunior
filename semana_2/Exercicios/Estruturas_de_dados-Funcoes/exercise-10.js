function createIdentityMatrix(dimension){

    if (dimension < 1){
        console.log("Can't creat the inputed indentity matrix.")
        return;
    }
    
    for (let i = 0; i < dimension; i++){
        for (let j = 0; j < dimension; j++){
            if (i == j){
                process.stdout.write(" 1 ");  //Prints without skipping a line like console.log() does
            }else{
                process.stdout.write(" 0 ");
            }
        }
        console.log('\n')  //This actually skips two lines
    }
}

let dimension = 4;

createIdentityMatrix(dimension);
