"use strict" //Modo estrito usando para fazer um código mais limpo e funcional

//Contagem simple de 1 até 10

//sintaxe do comando for 
// for (inicializador; condição; controle de incremento ou decremento)
//ex: for (i; i >=10; i++)

let lista = [10,20,30,40,50]

console.log ('Exemplo de for para imprimir um array ou lista')

for (let i=0; i <= lista.length; i++){//repete até a condição for verdadeira
     console.log (i)
}

console.log ('Fim do programa!!!')

//-----Repetição com FOR IN-----------------------------

for (let i in lista){ //retorna a posição dos elementos e pega os elementos pela posição
  console.log(lista[i])
}

console.log ('Fim do programa!!!')

//-----Repetição com FOR OF-------------------------------------

for (let j of lista){ //retorna os elementos da lista e é usado para pegar o elemento
  console.log(j)
}

console.log ('Fim do programa!!!')

//----------------------------------
let objetos = document.getElementsByTagName("div")

for (let i of objetos){
  console.log(i)
}

for (let i in objetos){
  console.log(i)
}