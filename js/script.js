var body = document.querySelector("body")
var btnDarkMode = document.querySelector("#dark-mode")

btnDarkMode.addEventListener("click",darkmode)

function darkmode(){
    body.classList.toggle("dark-mode")
    if (btnDarkMode.textContent == "ativar") {
        btnDarkMode.textContent = "desativar"
    } else {
        btnDarkMode.textContent = "ativar"
    }
}
