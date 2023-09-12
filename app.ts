//median-of-two-sorted-arrays

// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//     const merged = [...nums1, ...nums2].sort((a, b) => a - b);
//     const len = merged.length;
  
//     if (len % 2 === 0) {
//       const mid = len / 2;
//       return (merged[mid] + merged[mid - 1]) / 2;
//     } else {
//       const mid = Math.floor(len / 2);
//       return merged[mid];
//     }
// };
// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));


// powx-n
// function myPow(x: number, n: number): number {
//     if (n === 0) return 1;
//     if (n === 1) return x;
  
//     if (n < 0) {
//         x = 1 / x;
//         n = -n;
//     }
    
//     let result = 1;
    
//     while (n > 0) {
//         if (n % 2 === 1) {
//         result *= x;
//         }
//         x *= x;
//         n = Math.floor(n / 2);
//     }
    
//     return result;
// };
// console.log(myPow(2.00000, 10));
// console.log(myPow(2.10000, 3)); 
// console.log(myPow(2.00000, -2)); 



//multiply-strings
// function multiply(num1: string, num2: string): string {
//     if (num1 === '0' || num2 === '0') {
//         return '0';
//     }
  
//     const m = num1.length;
//     const n = num2.length;
//     const products: number[] = new Array(m + n).fill(0);
    
//     for (let i = m - 1; i >= 0; i--) {
//         const digit1 = +num1[i];
        
//         for (let j = n - 1; j >= 0; j--) {
//         const digit2 = +num2[j];
//         const product = digit1 * digit2;
        
//         const sum = products[i + j + 1] + product;
//         products[i + j + 1] = sum % 10;
//         products[i + j] += Math.floor(sum / 10);
//         }
//     }
    
//     if (products[0] === 0) {
//         products.shift();
//     }
    
//     return products.join('');
// };
// console.log(multiply('2', '3')); 
// console.log(multiply('123', '456')); 