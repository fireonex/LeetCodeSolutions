function isPowerOfThree(n: number): boolean {
    if (n <= 0) return false;
    while (n % 3 === 0) n /= 3;
    return n === 1;
}

isPowerOfThree(27) //true 3^3
isPowerOfThree(81) //true 3^4