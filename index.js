const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];


function generate() {
    let password = ''
    for (let i = 0; i < 12; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    distributor(password);
}

function distributor(password) {
    let passwordField1 = document.getElementById("generatedPassword1");
    let passwordField2 = document.getElementById("generatedPassword2");

    if (!passwordField1.textContent) {
        passwordField1.textContent = password;
    } else if (!passwordField2.textContent) {
        passwordField2.textContent = password;
    } else {
        passwordField1.textContent = '';
        passwordField2.textContent = '';
        passwordField1.textContent = password;
    }
}

function copyText(button) {
    if (button.textContent === "Скопировано!") {
        return;
    }

    if (button.textContent === "123321" || button.textContent === "kot2015") {
        return;
    }

    buttonText = button.innerText;
    navigator.clipboard.writeText(buttonText);

    button.textContent = 'Скопировано!';
    setTimeout(function () { button.textContent = buttonText }, 2000);
}
