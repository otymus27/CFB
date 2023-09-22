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
let numero = 5
let fatorial = 1

while (fatorial < 5){
  fatorial = (fatorial * (numero-1)) 
  
  numero--
}

console.log(fatorial)