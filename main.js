
 function res() {
   let name = prompt("Как вас зовут ?")
   let year = prompt("Когда вы родились ?") 
   let now = prompt("А какой сейчас год ?") 
   return now - year

 }

 alert("По-моему вам  " + res())



 function rand(min,max) {
     return Math.floor(Math.random() * (max + 1 - min) + min);
 }
let skolko = +prompt ("Сколько примеров вы хотите ?")
let minNumber = +prompt("Введите минимальный диапазон")
let maxNumber = +prompt("Введите максимальный диапазон")

for (let i = 0; i < skolko; i++) {

    let one = rand(minNumber,maxNumber)
    let two = rand(minNumber,maxNumber)
    let primer = +prompt(one + "+" + two + "=" )
    let otvet = primer == (one + two) ?"cool": "not cool man"  
    alert(one + " + " + two + " = " + (one + two) + "Ваш ответ " + primer + ", " + otvet )  
}