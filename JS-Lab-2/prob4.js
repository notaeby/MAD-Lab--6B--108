let sandwich = function(bread) {
    if (bread > 0) {
        return bread / 2;
    } else {
        return "No Bread"
    }
}

console.log("Sandwich made: ", sandwich(6))


function sandwitch1(bread, cheese) {
    if (bread % 2 == 0 && cheese > 1) {
        return bread / 2;
    } else if (bread % 2 == 0 && cheese == 1) {
        return 1;
    } else {
        return "No Bread";
    }
}
console.log("Sandwitch made: ", sandwitch1(10, 5));