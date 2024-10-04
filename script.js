const encryptMessageBtn = document.getElementById("emsg");
const message = document.getElementById("msg");
const dmessage = document.getElementById("demsg");
const demsgDisplay = document.getElementById("decryptmsgdisplay");
const msgDisplay = document.getElementById("dmsg");
const decryptMsgBtn = document.getElementById("decryptmsg");
const encryptPasswordBtn = document.getElementById("epwd");
const password = document.getElementById("pwd");
const pwdDisplay = document.getElementById("dpwd");

// Extended alphabet including lowercase, uppercase, and symbols for encryption
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
const symbols = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "{", "}", "[", "]", "?", "/", "<", ">", ".", ",", "~", "#", ":", ";", "|", "\\", "\"", "'", "`", "_", "£", "€", "¥", "¢", "∞", "§", "¶", "•", "ª", "º", "∆", "˚", "¬", "Ω", "≈", "√", "∫", "µ", "≤", "≥", "÷", "©", "®", "™", "✓", "✗", "✎", "✉", "★", "☆"];

encryptMessageBtn.addEventListener("click", () => {
    let encyptedMessage = "";
    const msg = message.value;
    for (let i = 0; i < msg.length; i++) {
        const char = msg.charAt(i);
        if (char === " ") {
            encyptedMessage += " ";
        } else {
            const index = alphabet.indexOf(char);
            if (index !== -1) {
                encyptedMessage += symbols[index];
            } else {
                encyptedMessage += char; // if character is not in the alphabet (like punctuation), keep it as is
            }
        }
    }
    msgDisplay.textContent = encyptedMessage;
});

decryptMsgBtn.addEventListener("click", () => {
    let decryptedMessage = "";
    const msg = dmessage.value;
    for (let i = 0; i < msg.length; i++) {
        const char = msg.charAt(i);
        if (char === " ") {
            decryptedMessage += " ";
        } else {
            const index = symbols.indexOf(char);
            if (index !== -1) {
                decryptedMessage += alphabet[index];
            } else {
                decryptedMessage += char; // if character is not in the symbols array, keep it as is
            }
        }
    }
    demsgDisplay.textContent = decryptedMessage;
});

function copyToClipboard() {
    const text = document.getElementById('dmsg').innerText;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Text copied to clipboard: ' + text);
}
