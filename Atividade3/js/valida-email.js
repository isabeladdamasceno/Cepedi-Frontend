export default function validaEmail(campo) {

    const email = campo.value.trim();
    
    if (email === '') {
     campo.setCustomValidity('O email é obrigatório !');
        return false;
    }
    
    const emailErrado = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailErrado.test(email)) {
      campo.setCustomValidity('Digite um email válido !');
        return false;
    }
    
    campo.setCustomValidity('');
    return true;
}
