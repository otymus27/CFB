"use strict" //Modo estrito usando para fazer um código mais limpo e funcional



let a = 100
let b = 15
let c = 5

console.log('Testes com operadores lógicos usando tabela verdade:')

console.log((a > b) && (a > c))
console.log((a > b) || (a > c))
console.log(!((a > b) || (a > c))) //expressão lógica usando o not que faz uma negação da sentença

if ((a > b) && (a > c )){
    console.log("Verdadeiro porque todas as sentenças retornam verdadeiro")
}else{
    console.log("Falso, pois uma das sentenças retornou falso")
}

if ((a > b) || (a > c )){
    console.log("Verdadeiro porque uma das sentenças retornaram verdadeiro")
}else{
    console.log("Falso, pois todas sentenças retornaram falso")
}

if ( !((a > b) || (a > c )) ){
    console.log("Retorna Verdadeiro porque foi feito uma negação")
}else{
    console.log("Retorna Falso porque foi feito uma negação")
}



