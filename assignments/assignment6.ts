function isPrime(n:number): boolean{
    if (n<=1)
        return false;

    for (let i=2; i<n ; i++ ){

        if (n%i==0)
       {
        return false;
       }
    } 
    
    return true;
}

console.log(isPrime(7));
console.log(isPrime(25));
console.log(isPrime(1));
