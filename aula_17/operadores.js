"use strict" //Modo estrito usando para fazer um código mais limpo e funcional

//sintaxe do comando WHILE
// while (inicializador; condição; controle de incremento ou decremento)
//ex: while (condição)

let n = 0

while(n < 10){
  console.log (n) 
  n +=1
}

console.log("Fim do programa!!!")

//-------------------------------------

n = 1
while (n <= 5){
  console.log(n)
  n +=1
}

console.log("Fim do programa!!!")

//--------------------------------------
let a = 5
let fatorial = 1

while (a <= 5){
  console.log(a * (a-fatorial))
  a =a - 1
}