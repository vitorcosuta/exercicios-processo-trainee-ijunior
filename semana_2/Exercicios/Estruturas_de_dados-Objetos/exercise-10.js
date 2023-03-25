function sortBooksById(set){
    /**
     * Sorts a set of books by IDs in descending order.
     */
    let aux;
    for (let i = 0; i < set.length; i++){
        for (let j = 0; j < set.length-1; j++){
            if (set[j].libraryID < set[j+1].libraryID){
                aux = set[j];
                set[j] = set[j+1];
                set[j+1] = aux;
            }
        }
    }

    return set;
}

var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

console.log('Unordered books:\n\n');
console.log(library);
console.log('Ordered books:\n\n');
console.log(sortBooksById(library));
