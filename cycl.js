let arr = [-1, -2, 3 , ]

function count(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum = sum + Math.abs( arr[i]) 
    }
    return Math.pow(sum, 2)
}
console.log(count(arr)) 