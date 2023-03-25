const my_obj = {
    name: 'Jordan',
    surname: 'Peele',
    age: 44
}

// Property object is our source of inherited objects.
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(my_obj))); ==> prints a list with all inherited properties

function obtainAllProperties(obj){
    let properties = [];
    for (; obj != null; obj = Object.getPrototypeOf(obj)){  // Prototype is our source of inherited properties
        let own_properties = Object.getOwnPropertyNames(obj);
        for (let i = 0; i < own_properties.length; i++){
            // Precisamos evitar a repeticao dos nomes das own properties
            if (properties.indexOf(own_properties[i]) == -1){
                properties.push(own_properties[i]);
            }
        }
    }

    return properties;
}

console.log(obtainAllProperties(my_obj));
