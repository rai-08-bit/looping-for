let soma = 0;// criação da variável "soma" e atribuição de valor igual a 0
for (let i = 1; i <= 5; i++) {
    const num = parseFloat(prompt(`Digite a nota da atividade ${i}`)) // Criação da constante "num" 

    if (isNaN(num) || num < 0) {
        alert("Você não digitou um número válido, tente novamente");// Verificação de valores da variável "num"
    } else {
        soma += num;
    }
}
let media=soma /5; // Criação da variável "media" e atribuição de valores à ela, tendo seu resultado como a divisão do resultado do valor da variável "soma" por 5  
alert(`A média é: ${media}`);
