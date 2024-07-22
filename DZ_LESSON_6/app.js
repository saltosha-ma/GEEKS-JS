

function generateRandom(maxLimit = 10){
   let rand = Math.random() * maxLimit;
   rand = Math.floor(rand) + 1;
   return rand;
}

let num1 = generateRandom();
let num2 = generateRandom();

document.getElementById("question").innerText = " Сколько будет " + num1 + " на " + num2 + " ? ";

function checkAnswer(){
   const userAnswer = document.getElementById("answer").value;
   const correctAnswer = num1 * num2;
   const resultDiv = document.getElementById("result");


   if (userAnswer == correctAnswer){
      resultDiv.innerText = " Правильно! ";
      resultDiv.style.color = " green ";
   } else {
      resultDiv.innerText = " Неправильный ответ!  Правильный ответ: " + correctAnswer;
      resultDiv.style.color = " red ";
   }

   document.getElementById("answer").value = " ";


   num1 = generateRandom();
   num2 = generateRandom();
   document.getElementById("question").innerText = " Сколько будет " + num1 + " на " + num2 + " ? ";
   document.getElementById("answer").value;
   

}



