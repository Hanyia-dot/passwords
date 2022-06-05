const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];


const showMessage = (e) => {

    div.textContent = ""
    const text = e.target.value;

    passwords.forEach((password, index) => {
        

        if(password.toLowerCase() === text.toLowerCase()) {

            div.textContent = messages[index];
            
        } 
        
    })

}

input.addEventListener("input", showMessage)