import { questionFloat } from 'readline-sync';

function calcularCapacidadeMaxima(largura, comprimento, profundidade) {
    const capacidadeCm3 = largura * comprimento * profundidade;
    return capacidadeCm3 / 1000;
}

function calcularRecomendacaoEnchimento(capacidadeMaxima) {
    return capacidadeMaxima * 0.85;
}

function calcularValorTotalEnchimento(precoPorLitro, quantidadeLitros) {
    return precoPorLitro * Math.ceil(quantidadeLitros / 1000);
}

function calcularGastoMensalEnchimento(quantidadeLitros, precoPorLitro) {
    const quantidadeReposicaoMensal = quantidadeLitros * 0.1;
    return calcularValorTotalEnchimento(precoPorLitro, quantidadeReposicaoMensal);
}

function main() {
    const largura = questionFloat("Digite a largura da piscina em cm: ");
    const comprimento = questionFloat("Digite o comprimento da piscina em cm: ");
    const profundidade = questionFloat("Digite a profundidade da piscina em cm: ");

    const capacidadeMaxima = calcularCapacidadeMaxima(largura, comprimento, profundidade);
    const recomendacaoEnchimento = calcularRecomendacaoEnchimento(capacidadeMaxima);

    console.log(`A capacidade máxima da piscina é de ${capacidadeMaxima.toFixed(2)} litros.`);
    console.log(`Recomenda-se encher a piscina até ${recomendacaoEnchimento.toFixed(2)} litros.`);

    const precoPorLitro = questionFloat("Digite o preço por cada 1000 litros de água: ");

    const valorTotalEnchimento = calcularValorTotalEnchimento(precoPorLitro, recomendacaoEnchimento);
    console.log(`O valor total para encher a piscina é de R$ ${valorTotalEnchimento.toFixed(2)}.`);

    const gastoMensal = calcularGastoMensalEnchimento(recomendacaoEnchimento, precoPorLitro);
    console.log(`O gasto mensal para manter a piscina no nível ideal é de R$ ${gastoMensal.toFixed(2)}.`);
}

main();
