vowelLeft = function(word) {
    var vowels = /(A|E|I|O|U|a|e|i|o|u)/;
    var leftmostposition = word.search(vowels);
    return leftmostposition + 1;
}

numberReverse = function(number) {
    var inputNumber_Array = String(number).split("").map((number) => {
        return Number(number)
    })
    for (let index = inputNumber_Array.length - 1; index >= 0; index--) {
        console.log(inputNumber_Array[index]);
    }
}

let word = "aeby";
console.log("1st vowel index: " + vowelLeft(word));
numberReverse(123456789);


// Develop and demonstrate JavaScript script that uses functions for the following problems: 
// 1.	Parameter: A string 
// 2.	Output: The position in the string of the left-most vowel 
// 3.	Parameter: A number  
// 4.	Output: The number with its digits in the reverse order
// Output:
// 1st vowel index: 1
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1