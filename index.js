// Question 1: Print Only Odd Numbers
let arr2=[1,2,3,4,5]
function printOdd(arr2) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] % 2 !== 0) {
            console.log(arr2[i])
        }
    }
}
console.log('Q1')
printOdd(arr2)


// Question 2: Count Odd Numbers
let arr1=[3,6,9,10]
function countOdd(arr1) {
    let count = 0
    for (let i = 0; i < arr1.length; i++) 
    {
        if (arr1[i] % 2 !== 0) 
        {
            count++
        }
    }
    return count
}
console.log('Q2')
console.log(countOdd(arr1))

// Question 3: Print Array in Reverse
let arr3=[10, 20, 30]
function printReverse(arr3) {
    for (let i = arr3.length - 1; i >= 0; i--) {
        console.log(arr3[i])
    }
}
console.log('Q3')
printReverse(arr3)

// Question 4: Multiply Each Element by 5
let arr4=[2,4]
function multiplyByFive(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 5);
    }
    return result
}
console.log('Q4')
console.log(multiplyByFive(arr4))

// Question 5: Find the Smallest Number
function findMin() {
    let arr = [8, 3, 6, 1];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log('Q5')
console.log(findMin());

// Question 6: Print Positive Numbers
function printPositive() {
    let arr = [-2, 5, -1, 7]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(arr[i])
        }
    }
}
console.log('Q6')
printPositive()

// Question 7: Count Numbers Greater Than 10
function countGreater() {
    let arr = [5, 12, 20, 8];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            count++;
        }
    }
    return count;
}
console.log('Q7')
console.log(countGreater());

// Question 8: Convert to Negative Numbers
function makeNegative() {
    let arr = [2, -4, 5]
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(-arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    return result
}
console.log('Q8')
console.log(makeNegative());

// Question 9: Print Index with Value
function printIndexValue() {
    let arr = [10, 20]
    for (let i = 0; i < arr.length; i++) {
        console.log("Index " + i + " : " + arr[i])
    }
}
console.log('Q9')
printIndexValue()

// Question 10: Sum of Even Numbers
function sumEven() {
    let arr = [1, 2, 4, 5];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log('Q10')
console.log(sumEven())

// Question 11: Increment Array Values
function incrementArray() {
    let arr = [4, 7]
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 1);
    }
    return result;
}
console.log('Q11')
console.log(incrementArray())

// Question 12: Check Zero in Array
function hasZero() {
    let arr = [3, 0, 5]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            return true;
        }
    }
    return false;
}
console.log('Q12')
console.log(hasZero())