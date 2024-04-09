import { questionFloat } from 'readline-sync';

function calcularValorConsumido(leituraAtual, leituraAnterior) {
    return leituraAtual - leituraAnterior;
}

function calcularValorTarifado(kWhConsumidos) {
    let valorTarifado = 0;

    if (kWhConsumidos <= 30) {
        valorTarifado = 0;
    } else if (kWhConsumidos <= 100) {
        valorTarifado = kWhConsumidos * 0.59;
    } else {
        valorTarifado = kWhConsumidos * 0.75;
    }

    return valorTarifado;
}

function calcularICMS(valorTarifado) {
    return valorTarifado * 0.25;
}

function calcularPIS_CONFIS(valorTarifado) {
    return valorTarifado * 0.15;
}

function calcularTaxaIluminacao(valorTarifado) {
    if (valorTarifado > 80) {
        return valorTarifado * 0.06;
    } else {
        return 0;
    }
}

function main() {
    console.log("Calculadora de Conta de Energia");

    const leituraAtual = questionFloat("Informe a leitura atual do medidor de energia (em KWh): ");
    const leituraAnterior = questionFloat("Informe a leitura anterior do medidor de energia (em KWh): ");

    const kWhConsumidos = calcularValorConsumido(leituraAtual, leituraAnterior);
    const valorTarifado = calcularValorTarifado(kWhConsumidos);
    const icms = calcularICMS(valorTarifado);
    const pis_confis = calcularPIS_CONFIS(valorTarifado);
    const taxaIluminacao = calcularTaxaIluminacao(valorTarifado);

    console.log(`Consumo: ${kWhConsumidos} KWh`);
    console.log(`Valor Faturado: R$ ${valorTarifado.toFixed(2)}`);
    console.log(`ICMS: R$ ${icms.toFixed(2)}`);
    console.log(`PIS/CONFIS: R$ ${pis_confis.toFixed(2)}`);
    console.log(`Taxa de Iluminação: R$ ${taxaIluminacao.toFixed(2)}`);
}

main();
