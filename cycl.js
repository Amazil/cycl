let arr = [30, 50, 77, 53, 50];
let sum = 0;
function count(arr) {
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < 0) 
        return 36
    }
    return Math.pow(sum, 2)
}
console.log(count(arr)) 