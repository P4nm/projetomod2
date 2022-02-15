const cep = $("#cep")
const button = $("#botao")
const endereco = $("#endereco")
const cidade = $("#cidade")
const estado = $("#uf")
const bairro = $("#bairro")

button.on("click", function (event) {
    event.preventDefault()
    const busca = cep.val() 
    $.getJSON(`https://viacep.com.br/ws/${busca}/json/`, ( dados ) => {
    
    endereco.val (dados.logradouro)
    bairro.val(dados.bairro)
    cidade.val(dados.localidade)
    estado.val(dados.uf)

    })

})



    