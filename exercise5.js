//function to split string and convert it to array of words
function stringToWords(str) {
    let arr = [];
    let temp = ""

    
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            temp += str[i]
        }
        if(str[i] === " " || i == str.length - 1) {
            arr.push(temp);
            temp = ""
        }
    }
    return arr;
}

console.log(stringToWords("Hello World"));
console.log(stringToWords("Hello World My Name Is Dimas"));