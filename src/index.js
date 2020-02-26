
function min (array) {
    if (arguments.length == 0 || array.length == 0){
        return 0;    
    }
    return array.sort((a, b) => a-b)[0];
}
console.log(min([3, 2, 1]));
exports.min = min;

exports.max = function max (array) {
    if (arguments.length == 0 || array.length == 0){
        return 0;    
    }
    return array.sort((a, b) => a-b)[array.length-1];
}

exports.avg = function avg (array) {
    if (arguments.length == 0 || array.length == 0){
        return 0;    
    }
    let avg = array.reduce((sum, item) => sum + item, 0) / array.length;
    return avg;
}
