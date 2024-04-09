import { question } from 'readline-sync';

function calcularCashback(valorCompra) {
    if (valorCompra <= 250) return valorCompra * 0.05;
    if (valorCompra <= 500) return valorCompra * 0.07;
    if (valorCompra <= 750) return valorCompra * 0.08;
    return (750 * 0.08) + ((valorCompra - 750) * 0.25);
}

let totalVendas = 0;
let totalCashback = 0;
let maiorCashback = 0;
let menorCashback = Infinity;
let totalClientes = 0;

while (true) {
    const nomeCliente = question("Digite o nome da cliente (ou 'FIM' para encerrar): ");
    if (nomeCliente.toUpperCase() === "FIM") break;

    const valorCompra = parseFloat(question("Digite o valor da compra da cliente: "));
    const cashback = calcularCashback(valorCompra);

    totalVendas += valorCompra;
    totalCashback += cashback;
    totalClientes++;

    if (cashback > maiorCashback) maiorCashback = cashback;
    if (cashback < menorCashback) menorCashback = cashback;
}

const mediaCashback = totalCashback / totalClientes;
const percentualCashback = (totalCashback / totalVendas) * 100;

console.log("\nResumo Mensal:");
console.log(`Faturamento Total: R$ ${totalVendas.toFixed(2)}`);
console.log(`Total Cashback: R$ ${totalCashback.toFixed(2)}`);
console.log(`Percentual de Cashback: ${percentualCashback.toFixed(2)}%`);
console.log(`Maior Cashback: R$ ${maiorCashback.toFixed(2)}`);
console.log(`Menor Cashback: R$ ${menorCashback.toFixed(2)}`);
console.log(`Média Cashback: R$ ${mediaCashback.toFixed(2)}`);
