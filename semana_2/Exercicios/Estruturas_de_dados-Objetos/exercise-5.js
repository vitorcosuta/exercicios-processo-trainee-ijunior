function calcCylinderVolume(cylinder_obj){

    let volume = Math.PI * Math.pow(cylinder_obj.r, 2) * cylinder_obj.h;
    return volume.toFixed(4);
}

let cylinder_1 = {
    r: 50,
    h: 100
}

console.log(`The area of the cylinder is ${calcCylinderVolume(cylinder_1)} cubic centimeters.`);