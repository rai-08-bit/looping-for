let num = parseInt(prompt("Digite um número:")); // Criação da variável inteira "num" 

if (isNaN(num)) {

    alert("Você não digitou um número válido, tente novamente"); // Verifica se o valor digitado foi válido, caso não tenha sido, o programa pede para o usuário digitar de novo
} else {
    let tabuada = ""; // Criação da variável "tabuada" que armazena o resultado da multiplicação
  for (let i = 1; i <= 10; i++) {
    const produto = num * i;
    tabuada += ` ${num} * ${i} = ${produto}\n `
    alert(`A tabuada do ${num} é: ${tabuada}`); // Exibição da tabuada na caixa alerta
}
}
