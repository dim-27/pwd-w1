//loop number according to the input
//if the multiply of 3 add fizz
//if the multiply of 5 with buzz
//if the multiply of 3 and 5 is fizzbuzz

function fizzBuzz(n) {
    let temp = ""
    for(let i = 1; i <= n; i++) {
        if(i % 15 === 0) {
            temp += "FizzBuzz";
            
        } else if (i % 5 === 0) {
            temp += "Buzz";
        } else if (i % 3 === 0) {
            temp += "Fizz"
        }else {
            temp += i
        }
        temp += " "
    }
    console.log(temp);
}

fizzBuzz(5);
fizzBuzz(35);