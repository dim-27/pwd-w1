//create triangle function according to height

function triangleHeight(height) {
    let k = 1;

    for(let i = 1; i <= height; i++) {
        let temp = ""
        for(let j = 1; j <= i; j++) {
            temp += k
            k++
            temp = temp + " "
        }
        console.log(`${temp}`);
    }
}

triangleHeight(5);
triangleHeight(4);