// Problem 1
const number = 23617;
let k_value = 4;
x = 1;

var arrayForNumber = String(number).split("");

for (let i = arrayForNumber.length - 1; i >= 0; i--) {
    if (x == k_value) {
        console.log("Value=" + arrayForNumber[i])
    }
    x++
}

// Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3
//Output = 3