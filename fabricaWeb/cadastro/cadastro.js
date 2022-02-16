const cep = $("#cep")
const button = $("#botao")
const endereco = $("#endereco")
const cidade = $("#cidade")
const email = $("#email")
const estado = $("#uf")
const bairro = $("#bairro")
const nome = $("#nome")
const rg = $("#rg")
const senha = $("#senha")
const confirmeSenha = $("#confirmeSenha")

cep.on("change", function (event) {
    const busca = cep.val() 
    $.getJSON(`https://viacep.com.br/ws/${busca}/json/`, ( dados ) => {
    
    endereco.val (dados.logradouro);
    bairro.val(dados.bairro);
    cidade.val(dados.localidade);
    estado.val(dados.uf);

})})

button.on("click", function (event) {
    event.preventDefault()
    if (email.val() != '' && nome.val() != '' && cep.val() != '' && rg.val() != '' && senha.val() != '' && confirmeSenha.val() != '' ) { 
    alert ("Cadastro realizado com sucesso!")
    } else {
        alert ("Preencha os campos!")
    }
    
})