"use strict" //Modo estrito usando para fazer um código mais limpo e funcional

//Contagem simple de 1 até 10

//sintaxe do comando for 
// for (inicializador; condição; controle de incremento ou decremento)
//ex: for (i; i >=10; i++)

let i = 0

console.log ('Exemplo clássico de uso do FOR')

for (i=1; i <= 10; i++){//repete até a condição for verdadeira
    console.log (i +" - CFB CURSOS")
}

console.log ('Fim do programa!!!')

//----------------------------------
let cont =0
let soma = 0
let cont_par = 0
let cont_impar = 0

for (cont=1; cont <= 10; cont++){//repete até a condição for verdadeira
  //aqui vai printar somente os pares
  if(cont % 2==0){
    console.log(cont+" - valor é par")
    cont_par +=1
    soma +=cont
  }else{
    console.log(cont+" - valor é impar")
    cont_impar +=1
    soma +=cont
  }  
}
let media = (soma/cont_par)
console.log('\n')
console.log('A soma de todos nº pares foi de '+soma)
console.log('A media de todos nº pares foi de '+media)

//----------------------------------
let lista = [10,20,30,40,50]

console.log ('Exemplo de for para imprimir um array ou lista')

for (let i=0; i <= lista.length; i++){//repete até a condição for verdadeira
     console.log (i)
}

console.log ('Fim do programa!!!')