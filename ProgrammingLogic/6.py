def ExpressionsQ():
    Expression = input('Digite la expresión: ')
    char_to_compare = {'{', '[', '(', '}', ']', ')'} 

    for char in Expression:
        if char in char_to_compare :
            if True and True:
                print(f"El carácter '{char}' coincide con el conjunto {char_to_compare}")
        else:
            print(f"El carácter '{char}' no coincide con el conjunto {char_to_compare}")

ExpressionsQ()