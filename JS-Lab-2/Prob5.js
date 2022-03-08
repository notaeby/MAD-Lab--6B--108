var cal = function() {
    var return_array = new Array();
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return_array.push(sum / arguments.length);
    return_array.push(Math.max.apply(Math, arguments));
    return return_array;

}
var result = cal(10, 20, 30, 40, 50);
console.log("Average : ", result[0], " Highest: ", result[1]);