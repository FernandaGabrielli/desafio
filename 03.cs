// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:  O menor valor de faturamento ocorrido em um dia do mês; O maior valor de faturamento ocorrido em um dia do mês; Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 
using System;
using System.Linq;

class Program
{
    static void Main()
    {
        // Exemplo de faturamento diario em um vetor
        double[] faturamentoDiario = new double[] { 500, 1000, 1500, 200, 800, 1200, 1100, 0, 500, 1300, 600, 1500, 900, 0, 0, 700, 1000, 950, 300, 1200, 1100, 500, 200, 0, 600, 900, 1300, 1100, 800, 0 };

        // Menor faturamento
        double menorFaturamento = faturamentoDiario.Where(x => x > 0).Min(); // Ignora os dias sem faturamento

        // Maior faturamento
        double maiorFaturamento = faturamentoDiario.Max();

        // Média do faturamento
        double mediaFaturamento = faturamentoDiario.Where(x => x > 0).Average(); // Ignora os dias sem faturamento 

        // Número de dias com faturamento superior à média
        int diasAcimaDaMedia = faturamentoDiario.Count(x => x > mediaFaturamento);

        // Exibe os resultados
        Console.WriteLine($"Menor faturamento: R${menorFaturamento}");
        Console.WriteLine($"Maior faturamento: R${maiorFaturamento}");
        Console.WriteLine($"Media de faturamento: R${mediaFaturamento:F2}");
        Console.WriteLine($"Numero de dias com faturamento superior a media: {diasAcimaDaMedia}");
    }
}
