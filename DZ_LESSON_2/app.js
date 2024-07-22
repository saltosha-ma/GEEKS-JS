let traficColor = prompt ("green, yellow, red,");

if (traficColor === "green"){
   console.log("GO!");
} else if (traficColor === "зеленый"){
   console.log("GO!");
} else if (traficColor === "yellow"){
   console.log("wait...")
} else if (traficColor === "red"){
   console.log("STOP")
}




const getPlanetName = (number) => {
    const planets = ["Меркурий", "Венера", "Земля", "Марс", "Юпитер", "Cатурн", "Уран", "Нептун", "Плутон"];
    return planets[number - 1];
}   
let number = parseInt(prompt("Ведите порядковый номер планеты (1-9):"), 10);

 if (number >= 1 && number <= 9){
    console.log(number + "->" + getPlanetName(number));
 } else {
    console.log("Неправильный номер. Ведите число от 1 до 9.");
 };