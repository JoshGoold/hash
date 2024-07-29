const encryptMessageBtn = document.getElementById("emsg")
const message = document.getElementById("msg")
const dmessage = document.getElementById("demsg")
const demsgDisplay = document.getElementById("decryptmsgdisplay")
const msgDisplay = document.getElementById("dmsg")
const decryptMsgBtn = document.getElementById("decryptmsg")
const encryptPasswordBtn = document.getElementById("epwd")
const password = document.getElementById("pwd")
const pwdDisplay = document.getElementById("dpwd")

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const symbols = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "{", "}", "[", "]", "?", "/", "<", ">", ".", ",", "~", "#", ":", ";"]

encryptMessageBtn.addEventListener("click", ()=>{
    let encyptedMessage = "";
    const msg = message.value;
    for(let i = 0; i < msg.length; i++){
        const char = msg.toLowerCase().charAt(i);
        if (char === " ") encyptedMessage += " "
        else{
            const index = alphabet.findIndex(letter => letter === char)
            if(alphabet[index+1]=== undefined){
                const symbol = symbols[0]
                encyptedMessage+= symbol
            } else{
                const symbol = symbols[index + 1]
                encyptedMessage += symbol;
            }   
        }
        
    }
    msgDisplay.textContent = encyptedMessage;
})

decryptMsgBtn.addEventListener("click", ()=>{
    let encyptedMessage = "";
    const msg = dmessage.value;
    for(let i = 0; i < msg.length; i++){
        const char = msg.toLowerCase().charAt(i);
        if (char === " ") encyptedMessage += " "
        else{
            const index = symbols.findIndex(letter => letter === char)
            if(symbols[index-1] === undefined){
                encyptedMessage += alphabet[25];
            } else{
                encyptedMessage += alphabet[index - 1];
            }
            
        }
        
    }
    demsgDisplay.textContent = encyptedMessage;

})

function copyToClipboard() {
    
    // Select the text
    msgDisplay.select();
    msgDisplay.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text to the clipboard
    document.execCommand('copy');
    
    // Alert the user
    alert('Text copied to clipboard: ' + msgDisplay.value);
}
