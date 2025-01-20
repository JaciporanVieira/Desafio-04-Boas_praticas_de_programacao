// 1. Exibir uma mensagem de boas-vindas com console.log
let nome = prompt("Qual é o seu nome?"); // 1. Pedir o nome do usuário

//2 Exiba a mensagem "Olá, [seu nome]!" no console
console.log("Olá, " + nome + "!");

// 3. Exibir uma mensagem com alert
alert("Olá, " + nome + "!");

// 4. Perguntar a linguagem preferida com prompt
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("Você gosta de: " + linguagem);

// 5. Soma de dois números
let valor1 = parseFloat(prompt("Digite o primeiro número para a soma:"));
let valor2 = parseFloat(prompt("Digite o segundo número para a soma:"));
let resultadoSoma = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultadoSoma + ".");

// 6. Subtração de dois números
let resultadoSubtracao = valor1 - valor2;
console.log("A diferença entre " + valor1 + " e " + valor2 + " é igual a " + resultadoSubtracao + ".");

// 7. Verificar maioridade
let idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 8. Verificar se um número é positivo, negativo ou zero
let numero = prompt("Digite um número:");
if (numero > 0) {
    console.log("O número " + numero + " é positivo.");
} else if (numero < 0) {
    console.log("O número " + numero + " é negativo.");
} else {
    console.log("O número " + numero + " é zero.");
}

// 9. Imprimir números de 1 a 10 com while
let i = 1;
console.log("Números de 1 a 10:");
while (i <= 10) {
    console.log(i);
    i++;
}

// 10. Determinar aprovação com base na nota
let nota = parseFloat(prompt("Qual é a sua nota?"));
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 11. Gerar um número aleatório com Math.random exibir no console.log
let numeroAleatorio = Math.random();
console.log("Número aleatório (0 a 1): " + numeroAleatorio);

// 12. Gerar número aleatório inteiro entre 1 e 10 e exibir no console.log
let numeroAleatorioInteiro1a10 = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatório inteiro entre 1 e 10: " + numeroAleatorioInteiro1a10);

// 13. Gerar um número aleatório inteiro entre 1 e 1000 exibir no console.log
let numeroAleatorioInteiro1a1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatório inteiro entre 1 e 1000: " + numeroAleatorioInteiro1a1000);
