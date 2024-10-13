const button = document.getElementById("g-btn")
const input = document.getElementById("password")
const length = 12;
const copyImg = document.getElementById("copy-img")

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '!@#$%^&*\-=+<>,.?|:;)(}{'
const allChars = upperCase + lowerCase + number + symbol
button.addEventListener('click',()=>{
    createPassword()
})

function createPassword(){
    let password = ''
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password += symbol[Math.floor(Math.random()*symbol.length)]
  
    while( length > password.length){
        password += allChars[Math.floor(Math.random()* allChars.length)]   
    }
    input.value = password
}
copyImg.addEventListener("click",()=>{
    navigator.clipboard.writeText(input.value).then(function() {
        alert("Copied the text: " + input.value);
    }).catch(function(error) {
        console.error("Error copying text: ", error);
    });
})