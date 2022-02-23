// Problem 2
const number = 23617;
const arrayForNumber = String(number).split("").map((number) => {
    return Number(number)
})
const initialValue = 1;
const sumWithInitial = arrayForNumber.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial);


// Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20
// (Hint: convert string to array and then use reduce function)
// Output = 20