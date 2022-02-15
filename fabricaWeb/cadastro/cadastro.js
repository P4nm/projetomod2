const cep = $("#cep")
const button = $("#button")
const endereço = $("#endereco")
const rua = $("#rua")
const bairro = $("#bairro")
const estado = $("#estado")
const cidade = $("#cidade")

button.on("click", function (event) {
    event.preventDefault()
    const busca = cep.val() 
    $.getJSON(`https://viacep.com.br/ws/${busca}/json/`, ( dados ) => {
        console.log( dados )
    rua.val (dados.logradouro)
    bairro.val(dados.bairro)
    estado.val(dados.uf)
    cidade.val(dados.localidade)

    })

})



    