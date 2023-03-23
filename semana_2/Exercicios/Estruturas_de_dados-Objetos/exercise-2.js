let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

function listProperties(sample_obj){
    let properties = '';

    for (let key of Object.keys(sample_obj)){
        properties += `${key}, `;
    }

    console.log(properties);
}

listProperties(student);
delete student['rollno'];
listProperties(student);
