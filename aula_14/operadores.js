"use strict" //Modo estrito usando para fazer um código mais limpo e funcional

//lê dois valores numéricos inteiros e compara se o primeiro é maior do que o segundo, utilizando uma condicional simples

let estacao_ano

console.log ('Exemplo clássico de SWITCH CASE - testa apenas um bloco de comandos.\n')


estacao_ano = 2
switch (estacao_ano){
    case 1:
        console.log ('1 - Verão')
        break
    case 2:
        console.log ('2 - Inverno')
        break
    case 3:
        console.log ('3 - Primavera')
        break
    case 4:
        console.log ('1 - Outono')
        break
    default:
        console.log('Estação inválida!!!')
        break
}

console.log ('Fim do programa!!!')
