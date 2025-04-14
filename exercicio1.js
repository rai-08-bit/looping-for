const num=parseInt(prompt("Digite um número")); //criação da variável constante inteiro "num"

if (isNaN(num) || num <= 1 ){
    alert("Você não digitou um número válido");
    //Verifica se o valor digitado para a variável conta como número inteiro
} else {
    let contagem = ""
    for (let i=1; i <= num; i++){
        (contagem = contagem + " " + i)
    }
    alert (`Os números de 1 até ${num} são: ${contagem}`)
} 