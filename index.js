function checkPrime(num) {
    let isPrime = true;
    
    for (let index = 2; index <= num/2; index++) {
        if ( num % index == 0){
            isPrime = false;
            break;
        }
    } 

    return isPrime;
}
console.log(`Prime: ${checkPrime(2)}`)