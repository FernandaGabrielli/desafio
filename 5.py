# func para inverter a string
def inverter_string(s):
    # var para armazenar a string invertida
    string_invertida = ""
    
    for i in range(len(s) - 1, -1, -1):
        string_invertida += s[i]
    
    return string_invertida

# Loop para continuar pedindo strings até o usuário responder 'n'
while True:
    # Solicita a string do usuário
    entrada = input("Digite uma string para inverter: ")

    # Chama a função para inverter a string e imprime o resultado
    print(f"String invertida: {inverter_string(entrada)}")

    # Pergunta se o usuário quer inverter outra string
    while True:
        resposta = input("Deseja inverter outra string? (s/n): ").lower()
        
        # Verifica se a resposta foi 's' ou 'n'
        if resposta == 's' or resposta == 'n':
            break
        else:
            print("Por favor, digite 's' ou 'n' apenas.")
    
    # Se a resposta for 'n', o programa encerra
    if resposta != 's':
        print("Programa encerrado.")
        break
