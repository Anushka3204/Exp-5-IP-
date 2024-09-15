function* primeGenerator(limit) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let num = 2;
    while (num <= limit) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}


const limit = parseFloat(prompt("Enter limit: "));
const primes = primeGenerator(limit);

for (let prime of primes) {
    console.log(prime);
}
