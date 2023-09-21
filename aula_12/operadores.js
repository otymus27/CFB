"use strict" //Modo estrito usando para fazer um código mais limpo e funcional

let lista_01 = [10,20,30]//array
let lista_02 = [11,22,33,44,55]//array
let lista_03 = [...lista_01,...lista_02]//array usando o spread

console.log("Usando o operador Spread - exemplo 01:")
console.log("lista 01 : "+ lista_01)
console.log("Lista completa: "+ lista_03)


//--------------------------------------
const primeiro = [1,2,3]
const segundo = [4,5,6]

const combinado = [...primeiro,"*",...segundo]
console.log(combinado)

//----------------------------------
let lista_num = [1,2]

function soma(a,b,c){
    return (a+b+c)
}

console.log(soma(3,3,3))
console.log(soma(3,...lista_num))

//--------------------------------
let jogador_1 = {nome:"Fábio", energia:100, vidas:3, magia:150}
let jogador_2 = {nome:"Paulo", energia:100, vidas:5, velocidade:130}
let jogador_3 = {...jogador_1,...jogador_2}
console.log(jogador_3)


//-----------------------------------------
let objetos = document.getElementsByTagName("div")

let lista_objetos = [...objetos]//aqui usei o spread para separar coleção de objetos e transformar em array

console.log(lista_objetos)

lista_objetos.forEach(element => {
    console.log(element)
    //element.innerHTML="teste" //aqui altero o conteudo da div
})