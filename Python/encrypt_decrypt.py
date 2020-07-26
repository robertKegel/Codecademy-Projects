def decrypt(encrypted_text, n):
    
    decrypted_text = [encrypted_text]
    
    
    for x in range(n):
        first_half = decrypted_text[0][:int(len(decrypted_text[0])/2)]
        second_half = decrypted_text[0][int(len(decrypted_text[0])/2):]
        text = ""
        for y in range(len(second_half)):
            try:
                text += second_half[y] + first_half[y]
            except IndexError:
                text += second_half[y]
        decrypted_text[0] = text
    return decrypted_text[0]
    
print(decrypt("hsi  etTi sats!", 1))

def encrypt(text, n):
    
    encrypted_text = [text]
    
    
    for x in range(n):
        first_half = ""
        second_half = ""
        count = 0
        for y in encrypted_text[0]:
            if count % 2 == 0:
                second_half += y
            else:
                first_half += y
            count += 1
        encrypted_text[0] = first_half + second_half
    return encrypted_text[0]

print(encrypt("This is a test!", 1))
print(encrypt("This is a test!", 2))
print(encrypt("This is a test!", 3))

    
