// let frase = prompt("Escreva uma frase")
// let novaFrase = frase.replaceAll("a", "x").replaceAll("o", "x")


// console.log(novaFrase);



// let email = prompt("Digite seu email: ")
//  console.log(email.trim())



// let nums
// let valor = 0
// let media

// for (let i = 0; i < 5; i++) {
//     nums = Number(prompt("Digite um número:"));
//     valor += nums
// }

// media = valor / 5

// console.log(`Soma: ${valor}`);
// console.log(`Média: ${media}`);





// for (let i = 0; i < 50; i++) {
//    if(i % 2){
//     console.log(i)

//    }  
//  }

// let senha 

// while(senha != 12345){
//     senha = Number(prompt("Digite a senha:"))

//     if(senha != 12345){
//     console.log("Errou, tente denovo!!")

// } else if(senha === 12345){
//     console.log("Acertou a senha!!")
//     }
// }
   

// const notas = []
// let media
// let valor = 0

// for (let i = 0; i < 4; i++) {
//         notas[i] = Number(prompt("Digite um número:"))
//         valor += notas[i]
// }
// media = valor / 4

//     console.log(`essas são suas notas ${notas} e essa sua média: ${media}`)


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const arrayPares = []
// const arrayImpares = []
//  for (const valor of nums) {
//      if (valor % 2 === 0) {
//          arrayPares.push(valor)
     
//         } else if(valor % 2 != 0){
//             arrayImpares.push(valor)
//         }
//     }


//     console.log(`Esse é o primeiro array: ${nums}`)
//     console.log(`Esse é o array de numeros pares: ${arrayPares}`)
//     console.log(`Esse é o array de numeros impares: ${arrayImpares}`)


const vetor = [];

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt(`Digite o número ${i+1}:`));
    vetor.push(numero);
}

// Ordenar o vetor em ordem crescente
vetor.sort((a, b) => a - b);

console.log("Vetor ordenado:", vetor);
