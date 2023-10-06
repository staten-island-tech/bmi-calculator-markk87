const user = {
    name: prompt("Enter your name"),
    heightCM: prompt("Enter your height in CM"),
    weightKg: prompt("Enter your weight in Kg"),
};



function getBMI(user) {
    const heightM = user.heightCM / 100;
    const bmi = user.weightKg / (heightM * heightM);
    return bmi;
}

function tellBMI(bmi) {
    if (bmi < 18.5) {
        return "You are underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "You are at a healthy weight";
    } else {
    return "You are overweight";
    }
}

const userBMI = getBMI(user);
const tell = tellBMI(userBMI);


console.log (`${user.name}'s BMI is ${userBMI.toFixed(1)} - ${tell}`);
