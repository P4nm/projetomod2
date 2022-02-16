const cep = $("#cep")
const button = $("#botao")
const endereco = $("#endereco")
const cidade = $("#cidade")
const email = $("#email")
const estado = $("#uf")
const bairro = $("#bairro")

cep.on("change", function (event) {
    const busca = cep.val() 
    $.getJSON(`https://viacep.com.br/ws/${busca}/json/`, ( dados ) => {
    
    endereco.val (dados.logradouro);
    bairro.val(dados.bairro);
    cidade.val(dados.localidade);
    estado.val(dados.uf);

})})

button.on("click", function (event) {
    if (email.val() != '') { 
    alert ("Cadastro realizado com sucesso!")
    } else {
        alert ("Preencha os campos!")
    }
    
})