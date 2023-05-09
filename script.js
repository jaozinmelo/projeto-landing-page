const nome = document.getElementById('inputNome')
const email = document.getElementById('inputEmail')
const telefone = document.getElementById('inputTel')

// console.log(nome, email, telefone)

const alertClick = () => {
    const endereco = email.value

    if(nome.value === ""){
        const msg =alert('Digite seu nome no campo exigido.')
    }else if (telefone.value === ""){
        const msg =alert('Digite seu Telefone no campo exigido.')
    }else if (email.value === ""){
        const msg =alert('Digite seu E-mail no campo exigido.')
    }else {
        const msg =alert('Entraremos em contato através do endereço ' + endereco)
        nome.value = ""
        email.value = ""
        telefone.value = ""
    }
}

const alertSeguroVida = () => {
    const msgSeguroVida = alert('Você receberá uma proposta no seu E-mail a respeito do seguro de vida 4SAFE. ')
}
const alertSeguroCarro = () => {
    const msgSeguroVida = alert('Você receberá uma proposta no seu E-mail a respeito do seguro AUTOMOTIVO 4SAFE. ')
}