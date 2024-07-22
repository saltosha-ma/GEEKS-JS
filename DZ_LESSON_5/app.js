function calculateBMI() {
 
   let height = document.getElementById('height').value;
   let weight = document.getElementById('weight').value;


   if (height === "" || weight === "") {
       alert("Пожалуйста, введите рост и вес.");
       return;
   }

 
   height = height / 100;

   let bmi = weight / (height * height);


   bmi = bmi.toFixed(2);

   
   let category;
   if (bmi < 18.5) {
       category = "Недостаточный вес";
   } else if (bmi < 24.9) {
       category = "Вес в норме";
   } else if (bmi < 29.9) {
       category = "Избыточный вес";
   } else {
       category = "Ожирение";
   }

   document.getElementById('result').textContent =
    "Ваш индекс массы тела: " + bmi + " .  Категория: " + category + " . ";
}

