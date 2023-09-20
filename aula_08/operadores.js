"use strict" //Modo estrito usando para fazer um código mais limpo e funcional

let a = 13
let b = 14

let resultado1 = (a & b)
let resultado2 = (a | b)
let resultado3 = (a ^ b)


console.log('Testes com operadores bitwise:')
console.log("a & b = " +resultado1) //o bitwise & vai retornar 1 onde tiver somente 1
console.log("a | b = " +resultado2) //o bitwise | vai retornar 1 onde tiver pelo menos 1
console.log("a ^ b = " +resultado3) //o bitwise xor vai retornar 1 onde tiver 1 e não pode ter equivalencia


console.log("Deslocamento de bits para direita") 
let a1 = 10

let res1 = a1 >>  1
console.log(res1)


console.log("Deslocamento de bits para esquerda")
let b1 = 10

let res2 = b1 <<  1
console.log(res2)
