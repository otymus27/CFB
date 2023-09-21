"use strict" //Modo estrito usando para fazer um código mais limpo e funcional

//lê dois valores numéricos inteiros e compara se o primeiro é maior do que o segundo, utilizando uma condicional simples

let num = 11

console.log ('Exemplo clássico de condicional simples - testa apenas um bloco de comandos.\n')

if (num > 10){
    console.log('Teste de um bloco simples')//o bloco só executará se a condição for verdadeira
    console.log ('O valor informado foi '+num + " é maior que 10.")

}  
console.log ('fim do programa!')


//--------------------------------------

let a = 11

console.log ('Exemplo clássico de condicional simples - testa apenas um bloco de comandos.\n')

if (a > 10){
    console.log('Teste de um bloco composto')//o bloco só executará independente se a condição for verdadeira ou falsa
    console.log ('O valor informado foi '+a + " é maior que 10.")
}else{
    console.log ('O valor informado foi '+a + " é menor que 10.")
}  

console.log ('fim do programa!')

//--------Condicional composta-------------------------

a=5
if (a > 10){
    console.log('Teste de um bloco composto')//o bloco executará independente se a condição for verdadeira ou falsa
    console.log ('O valor informado foi '+a + " é maior ou igual a 10.")
}else if (a > 5){
    console.log ('O valor informado é '+a+' esta entre 5 e 10.')
}else{
    console.log ('O valor informado foi '+a + " é menor ou igual a 5 .")
} 

console.log ('fim do programa!')

//----------Condicional aninhada--------------------------------

a = 5
if (a > 10){
    console.log('Teste de um bloco aninhado')//o bloco executará independente se a condição for verdadeira ou falsa
    console.log ('O valor informado foi '+a + " é maior ou igual a 10.")
    if(a > 50){
        console.log ('O valor informado foi '+a + " é maior que 50.")
    }
}else{
    console.log ('O valor informado foi '+a + " é menor ou igual a 100 .")
    if (a < 50){
        console.log ('O valor informado foi '+a + " é menor ou igual a 50 .")
    }
} 


//----------Exemplo de condicional composta usando operadores lógicos
let energia = 100
let clima = "sol"

if ((energia > 70) && (clima == "sol")){
    console.log("Eu vou a praia.")
    
}else{
    console.log ('Eu vou ao cinema.')
}