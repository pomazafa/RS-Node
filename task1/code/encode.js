module.exports = (text, shift) => {
    const Alph = "abcdefghijklmnopqrstuvwxyz";
    const uAlph = Alph.toUpperCase();

    for (i = 0; i < text.length; i++) {
        if (Alph.includes(String.fromCharCode(text[i]))) {
            text[i] = Alph[(Alph.indexOf(String.fromCharCode(text[i])) + shift + uAlph.length) % uAlph.length].charCodeAt(0);
        } else if (uAlph.includes(String.fromCharCode(text[i]))) {
            text[i] = uAlph[(uAlph.indexOf(String.fromCharCode(text[i])) + shift + uAlph.length) % uAlph.length].charCodeAt(0);
        }
    }
    return text + '\n';
}