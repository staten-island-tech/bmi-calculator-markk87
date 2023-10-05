const user = {
    name: Josh,
    heightCM: 152,
    weightKg: 70,
};





function getBMI(w, h) {
    return w/(h * h) * 10000;
}

function BMI() {
    const height = Number(prompt("What is your height in inches?"));
    const weight = Number(prompt("What is your weight in pounds?"));

    console.log(getBMI(weight, height));

    if (getBMI(weight, height) > 24.9 ) {
        console.log("You are overweight");
    } else if (getBMI(weight, height) < 18.5) {
        console.log("You are underweight");
    } else if (getBMI(weight, height) > 18.5 || getBMI(weight, height) < 24.9) {
        console.log("You are one healthy mothafucka");
    }
}

const userBMI = cal

BMI();