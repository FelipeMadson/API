import { questionFloat, questionInt, question } from 'readline-sync';

function calcularSaldoMensal(saldoInicial, aporteMensal, taxaJuros) {
    const juros = saldoInicial * (taxaJuros / 100);
    return saldoInicial + aporteMensal + juros;
}

function main() {
    console.log("Bem-vindo ao calculador de investimento!");

    const objetivo = question("Qual é o objetivo do investimento? ");
    const valorObjetivo = questionFloat("Qual é o valor do objetivo? R$ ");
    const salario = questionFloat("Qual é o seu salário? R$ ");
    const percentualInvestimento = questionFloat("Qual é o percentual que pretende investir mensalmente? ");
    const taxaJuros = questionFloat("Qual é a taxa de juros do investimento escolhido? (%) ");

    let saldo = 0;
    let meses = 0;

    while (saldo < valorObjetivo) {
        saldo = calcularSaldoMensal(saldo, salario * (percentualInvestimento / 100), taxaJuros);
        meses++;
    }

    const anos = Math.floor(meses / 12);
    const mesesRestantes = meses % 12;

    if (anos > 0 && mesesRestantes > 0) {
        console.log(`Você atingirá o objetivo de R$ ${objetivo} em ${anos} anos e ${mesesRestantes} meses.`);
    } else if (anos > 0) {
        console.log(`Você atingirá o objetivo de R$ ${objetivo} em ${anos} anos.`);
    } else {
        console.log(`Você atingirá o objetivo de R$ ${objetivo} em ${meses} meses.`);
    }
}

main();
