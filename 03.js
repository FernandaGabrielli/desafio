const faturamento = [
    { dia: 1, valor: 600 },
    { dia: 2, valor: 400 },
    { dia: 3, valor: 100 },
    { dia: 4, valor: 600 },
    { dia: 5, valor: 550 },
    { dia: 6, valor: 0 },
    { dia: 7, valor: 0 },
];

// function para calcular as metricas solicitadas
function calcularFaturamento(faturamento) {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    // Itera sobre os dados de faturamento
    faturamento.forEach(item => {
        if (item.valor > 0) {  // Ignora os dias sem faturamento
            // Verifica o menor faturamento
            if (item.valor < menorFaturamento) {
                menorFaturamento = item.valor;
            }

            // Verifica o maior faturamento
            if (item.valor > maiorFaturamento) {
                maiorFaturamento = item.valor;
            }

            somaFaturamento += item.valor;
            diasComFaturamento++;
        }
    });

    // Calcula avg
    const mediaFaturamento = somaFaturamento / diasComFaturamento;

    // Exibe as métricas
    console.log(`Menor faturamento: ${menorFaturamento}`);
    console.log(`Maior faturamento: ${maiorFaturamento}`);
    console.log(`Média do faturamento: ${mediaFaturamento.toFixed(2)}`);
    
    // Exibe os dias com faturamento acima da média
    console.log("Dias com faturamento acima da média:");
    faturamento.forEach(item => {
        if (item.valor > mediaFaturamento) {
            console.log(`Dia ${item.dia}: ${item.valor}`);
        }
    });
}

// Chama a função passando o vetor de faturamento
calcularFaturamento(faturamento);
