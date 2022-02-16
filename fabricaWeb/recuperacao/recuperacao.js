const emailRecupera = $("#email")
const recuperarSenha = $("#button")

recuperarSenha.on("click", function (event) {
    event.preventDefault() //  preventDefault ele evite que atualize a pagina 
    if (emailRecupera.val().includes("@"&&".com")) {

        alert ("Encaminhamos um e-mail para recuperação de senha.")
    } else {

        alert ("Insira um e-mail válido!")
    }

}) 
