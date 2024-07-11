console.log("lesson 4");

//for of
let students = ["adilet", "RENATA", "SalTANat", "baKIR", "MARSel"];
let newStudents = [];

for(let student of students){
   let firstLetter = student[0];
   let restLetters = student.slice(1);
   student = firstLetter.toUpperCase() + restLetters.toLowerCase();
   newStudents.push(student);
}

console.log(students);
console.log(newStudents);

// functions - функции

function calculatePrice(price, discount){
   let priceWithDiscount = price - price * discount / 100;
   return priceWithDiscount
}
 console.log(calculatePrice(1000, 40));
 // y = f(x^2), x = 5, y = 25


 function calculatePriceWithPromocode(price, promocode){

      if(!promocode) return price;

      switch(promocode.toUpperCase()){
         case "GEEKS_SUMMER":
            return calculatePrice(price, 20);
         case "KIT_FORUM_2024":
            return calculatePrice(price, 5);
         case "FROM_EVGENIY_JS":
            return 0;
         default:
            return calculatePrice(price, 100);
      }
 }

 let userPromocode = prompt("enter promocode");

 console.log(calculatePriceWithPromocode(10_000, userPromocode));


 let getDeveloperLevel = function(yearsInIt){
   if(yearsInIt <== 2)
      return "junior";
   else if(yearsInIt > 2 && yearsInIt <== 7)
      return "Middle"
   else if(yearsInIt > 7)
      return ""
 } 
