//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 20;

    if (idade > 18) {
        console.log("Você é maior de idade");
    } 

// 2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade
// E a condição humana seja true

let idade2 = 20;
let humana = true;

    if (idade2 > 18 && humana == true) {
        console.log("Você é maior de idade e humana");
    }

//3 - Criar uma condição que exiba uma mensagem no console se você fizer 
// aniversário em Janeiro OU Dezembro

let mes = "Dezembro";

    if (mes == "Janeiro" || mes == "Dezembro") {
        console.log("Você faz aniversário em Janeiro ou Dezembro");
    }

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let nome = "Rafael";

    if (nome.charAt(0) == "R") {
        console.log("Seu nome começa com a letra R");
    }

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome 
// tenha mais de 6 letras OU seu sobrenome começar com a letra E

let sobrenome = "Wessler";

    if (sobrenome.length > 6 || nome.charAt(0) == "E") {
        console.log("Seu sobrenome tem mais de 6 letras ou seu sobrenome começa com a letra E");
    }