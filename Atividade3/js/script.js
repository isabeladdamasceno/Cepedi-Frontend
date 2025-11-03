import ehUmNomeValido from "./validacao-nome.js";
import ehMaiorDeIdade from "./valida-idade.js";
import validaCliente from "./valida-cliente.js";
import validaEmail from "./valida-email.js";
import validaSexo from "./valida-sexo.js";

const camposDoFormulario = document.querySelectorAll('[required]');

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    },
    cliente: {
        valueMissing: 'Você deve escolher um tipo.',
    },
    sexo: {
        valueMissing: 'Você deve escolher um tipo.',
    }
}

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("invalid", evento => evento.preventDefault());

    campo.addEventListener('blur', ()=> verificaCampo(campo));

    campo.addEventListener('change', () => verificaCampo(campo)); 
});

function verificaCampo (campo){

    let mensagem = "";
    campo.setCustomValidity('');

     if(campo.name == "nome" && campo.value.length >= 2){
        ehUmNomeValido(campo);
     }

     if(campo.name == "aniversario" && campo.value != ""){
         ehMaiorDeIdade(campo);
     }

     if(campo.name == "email" && campo.value != ""){
         validaEmail(campo);
     }

     if(campo.name == "sexo" && campo.value != ""){
         validaSexo(campo);
     }

     if(campo.name == "cliente" && campo.value != ""){
         validaCliente(campo);
     }

     tiposDeErro.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })

    const mensagemErro = campo.closest('div').querySelector('.mensagem-erro');

    const validadorDeInput = campo.checkValidity();
    
    if (mensagemErro) { 
        if (!validadorDeInput) {
            mensagemErro.textContent = mensagem;
        } else {
            mensagemErro.textContent = "";
        }
    }
}
