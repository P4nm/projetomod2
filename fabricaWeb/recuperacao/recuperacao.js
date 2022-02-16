const emailRecupera = $("#email")
const recuperarSenha = $("#botao")

recuperarSenha.on("click", function (event) {
    event.preventDefault() //  preventDefault ele evite que atualize a pagina
    alert ("Encaminhamos um e-mail para recuperação de senha.")
    console.log (emailRecupera.val())
})
