//remove all odd numbers in an array and return a new array that contains even number
function oddToEven(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    // console.log(newArr);
    return newArr;
}

// oddToEven([1, 2, 3, 4, 5, 6, 7])
console.log(oddToEven([1, 2, 3, 4, 5, 6, 7]));
console.log(oddToEven([12, 24, 35, 41, 35, 6, 72]));
