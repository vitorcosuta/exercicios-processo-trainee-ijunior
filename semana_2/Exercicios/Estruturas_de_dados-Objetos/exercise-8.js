var controller = 0;  // Read as number of seconds

console.log('Starting to count...');
var activator = setInterval(runClock, 1000);

function runClock(){
    
    let date = new Date();
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    console.log(`${date.getHours()}:${date.getMinutes()}:${seconds}`);
    controller++;

    if(controller == 60){
        clearInterval(activator);
    }
}