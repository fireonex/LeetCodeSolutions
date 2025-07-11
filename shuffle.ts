function shuffle(nums: number[], n: number): number[] {
    const xNumsArr = nums.slice(0, n)
    const yNumsArr = nums.slice(n, nums.length)
    const result: number[] = []
    for (let i = 0; i < n; i++) {
        result.push(xNumsArr[i])
        result.push(yNumsArr[i])
    }
    return result
}

shuffle([2, 5, 1, 3, 4, 7], 3) //[2,3,5,4,1,7]
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].