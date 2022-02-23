const number = 23617;
const arrayForNumber = String(number).split("").map((number) => {
    return Number(number)
})
var evenInArray = arrayForNumber.filter(
    Number => Number % 2 == 0
);
initialValue = 0;
var sumForEvenNumber = evenInArray.reduce((previousValue, currentValue) => previousValue + currentValue,
    initialValue
);
console.log(sumForEvenNumber)


// Write program to find sum of even digits. Input 23617 output 2+6=8.
// (Hint: Convert string to array and use map function)
// Output = 8