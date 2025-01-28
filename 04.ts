// Definindo o tipo de dado para o faturamento
interface Faturamento {
  [estado: string]: number; // Cada estado tem um valor de faturamento num
}

// Faturamento de cada estado
const faturamento: Faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Calcula o valor total do faturamento
const valorTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

// Função para calcular e exibir o percentual de cada estado
function calcularPercentuais(faturamento: Faturamento): void {
  console.log("Percentual de faturamento de cada estado:");

  // Para cada estado, calcula o percentual
  for (let estado in faturamento) {
    const valorEstado = faturamento[estado];
    const percentual = (valorEstado / valorTotal) * 100;

    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
}

// Chama a função para calcular e exibir os percentuais
calcularPercentuais(faturamento);
