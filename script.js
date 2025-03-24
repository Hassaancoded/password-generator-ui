function getPassword(length) {
    let Password = "";
    let characters = "aquickbrownfoxjumpsoverthelazydogAQUICKBROWNFOXJUMPSOVERTHELAZYDOG0123456789";
    let charSize = characters.length;
    
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charSize);
        Password += characters[randomIndex];
    }
    
    return Password;
}

function generatePassword() {
    let length = document.getElementById("length").value;
    
    if (length < 1 || length > 30) {
        alert("Please enter a length between 1 and 30.");
        return;
    }
    
    let Password = getPassword(length);
    document.getElementById("password-box").innerText = Password;
}
