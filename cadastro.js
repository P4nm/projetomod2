const cep = $("#cep")
const button = $("#button")
const endereço = $("#endereco")
const rua = $("#rua")
const bairro = $("#bairro")
const estado = $("#estado")
const cidade = $("#cidade")
const email = $("#email")

button.on("click", function (event) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        checkInputs()
})
    
    function checkInputs() {
        // const cepValue = cep.Value
        const emailVal = email.Val.trim()
    
        if(emailVal === '') {
            //mostrar o erro
            errorValidotion(email, 'Preencha esse campo')
        } else {
    
        }

    event.preventDefault()
    const busca = cep.val() 
    $.getJSON(`https://viacep.com.br/ws/${busca}/json/`, ( dados ) => {
        console.log( dados )
    rua.val (dados.logradouro)
    bairro.val(dados.bairro)
    estado.val(dados.uf)
    cidade.val(dados.localidade)

    })
    }
})

    // event.preventDefault()
    // const busca = cep.val() 
    // $.getJSON(`https://viacep.com.br/ws/${busca}/json/`, ( dados ) => {
    //     console.log( dados )
    // rua.val (dados.logradouro)
    // bairro.val(dados.bairro)
    // estado.val(dados.uf)
    // cidade.val(dados.localidade)

    // })


// function validarEmail() {
//     let email = document.querySelector(`#email`);
//     let error = document.querySelector (`#erroEmail`);

//     if (!email.checkValidity()) {
//         error.InnerHTML = "email invalido";
//     }
//      alert ("email invalido")
// }

// function redefinirMsg() {
//     let error = document.querySelector(`#errorEmail`);

//     if (error.innerHTML == "Email invalido") {
//         error.innerHTML = " ";
//     }
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     checkInputs()
// })

// function checkInputs() {
//     // const cepValue = cep.Value
//     const emailVal = email.Val.trim()

//     if(emailVal === '') {
//         //mostrar o erro
//         errorValidotion(email, 'Preencha esse campo')
//     } else {

//     }
// })