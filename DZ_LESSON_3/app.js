 // первое задание
let number = parseInt(prompt("Введите число от 2 до 10: "), 10);


if (number >= 2 && number <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
} else {
    console.log("Введите число только от 2 до 10.");
}

//второе задание
const grades = [40, 55, 22, 89, 14, 78, 56, 47, 59];
for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    let fivePointGrade = "";

    if (grade < 20) {
        fivePointGrade = 1;
    } else if (grade < 40) {
        fivePointGrade = 2;
    } else if (grade < 60) {
        fivePointGrade = 3;
    } else if (grade < 80) {
        fivePointGrade = 4;
    } else {
        fivePointGrade = 5;
    }

    console.log(grade + " баллов это " + fivePointGrade);
}