function calcCirlclePerimeter(circle){
    
    let perimeter = 2 * Math.PI * circle.r;
    return perimeter.toFixed(2);
}

function calcCircleArea(circle){

    let area = Math.PI * circle.r * circle.r;
    return area.toFixed(2);
}

let my_circle = {
    r: 4
}

console.log(`The circle perimeter equals ${calcCirlclePerimeter(my_circle)} and its area equal ${calcCircleArea(my_circle)}`);
