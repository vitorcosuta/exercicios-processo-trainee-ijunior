function reverse(n){
    
    let remainder, reverse = 0;
    while(n != 0){
        remainder = n % 10;
        reverse = reverse * 10 + remainder;
        n = Math.floor(n/10);
    };
    
    return reverse;
}

console.log(reverse(7821));