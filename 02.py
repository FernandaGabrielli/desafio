def pertence_fibonacci(n):
    a, b = 0, 1  # Inicia a sequência com 0 e 1
    while a < n:  # Vai gerando os prox num da sequência
        a, b = b, a + b  # Atualiza os valores de a e b, gerando o próximo num
    return a == n  # Verifica se o num informado é igual a algum num gerado na sequência

# fuction para pedir o num ao user com tentativas e validação
def pedir_numero():
    while True:  # Fica rodando até o user digitar um número válido
        try:
            numero = int(input("Informe um número para verificar se pertence à sequência de Fibonacci: "))
            return numero  # Retorna o número se for válido
        except ValueError:
            print("Por favor, digite um número válido!")  # Caso o user não digite um número, exemplos
            print("Exemplos respostas possíveis: 0, 1, 2, 3, 4, 5, 6, 7, 8...100...2000")

# Solicita o número do user até que ele digite um número válido
numero = pedir_numero()

# Verifica se o número pertence à sequência de Fibonacci
if pertence_fibonacci(numero):
    print(f"O número {numero} pertence à sequência de Fibonacci.")
else:
    print(f"O número {numero} não pertence à sequência de Fibonacci.")
