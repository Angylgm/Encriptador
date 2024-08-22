let textoOriginal = ''; 
const desplazamiento = 3; 

function encriptar() {
    const input = document.getElementById('inputText').value;
    textoOriginal = input; 
    const output = document.getElementById('outputText');
    output.value = caesarCipher(input, desplazamiento);
}

function desencriptar() {
    const output = document.getElementById('outputText');
    output.value = textoOriginal; 
}

function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            let base = char.toLowerCase() === char ? 97 : 65;
            return String.fromCharCode(((code - base + shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}