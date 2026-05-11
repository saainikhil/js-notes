// Bitwise Operators Learning Guide

// 1. AND (&) - Returns 1 if both bits are 1
console.log("AND Operator:");
console.log(5 & 3); // 1 (0101 & 0011 = 0001)

// 2. OR (|) - Returns 1 if at least one bit is 1
console.log("\nOR Operator:");
console.log(5 | 3); // 7 (0101 | 0011 = 0111)

// 3. XOR (^) - Returns 1 if bits are different
console.log("\nXOR Operator:");
console.log(5 ^ 3); // 6 (0101 ^ 0011 = 0110)

// 4. NOT (~) - Inverts all bits
console.log("\nNOT Operator:");
console.log(~5); // -6

// 5. Left Shift (<<) - Shifts bits left, fills with 0
console.log("\nLeft Shift Operator:");
console.log(5 << 1); // 10 (0101 << 1 = 1010)

// 6. Right Shift (>>) - Shifts bits right, preserves sign
console.log("\nRight Shift Operator:");
console.log(5 >> 1); // 2 (0101 >> 1 = 0010)

// 7. Unsigned Right Shift (>>>) - Shifts right, fills with 0
console.log("\nUnsigned Right Shift Operator:");
console.log(-5 >>> 1); // Large positive number

// Practical examples
console.log("\nPractical Examples:");
console.log(8 & 4); // Check common bits
console.log(8 | 4); // Combine flags
console.log(12 ^ 10); // Find differing bits
console.log(2 << 3); // Multiply by 2^3 (= 16)
console.log(16 >> 2); // Divide by 2^2 (= 4)