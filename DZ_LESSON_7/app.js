function generateNumbers() {
   const numbersContainer = document.getElementById("numbers");
   numbersContainer.innerHTML = " "; 

   for (let i = 0; i < 6; i++) {

       const randomNumber = Math.floor(Math.random() * 99) + 1;

       const numberElement = document.createElement("div");
       numberElement.className = "number";

       numberElement.textContent = randomNumber;

       numbersContainer.appendChild(numberElement);

   }
}

document.getElementById("generateButton").addEventListener("click", generateNumbers);