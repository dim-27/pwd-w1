//calculate BMI
function calculateBMI(weight, height) {
    let formulaBMI = ((weight/height/height) * 10000).toFixed(2);
    // console.log(formulaBMI);
    
    if (formulaBMI < 18.5) {
        return "Less Weight";
    } else if (formulaBMI >= 18.5 && formulaBMI <= 24.9) {
        return "ideal"
    } else if (formulaBMI >= 24.9 && formulaBMI <= 29.9) {
        return "overweight"
    } else if (formulaBMI >= 30 && formulaBMI <= 39.9) {
        return "very overweight"
    } else {
        return "obesity"
    }

}

console.log(calculateBMI(89,175));
console.log(calculateBMI(60,185));
console.log(calculateBMI(45,150));