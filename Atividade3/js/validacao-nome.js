export default function ehUmNomeValido(campo) {
    const nome = campo.value.trim(); 
    
    if (!nome || nome.length < 2) {
        campo.setCustomValidity('O nome deve ter pelo menos 2 caracteres');
        return false;
    }
    
    const caracteresErradosParaNome = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!caracteresErradosParaNome.test(nome)) {
        campo.setCustomValidity('Use apenas letras no nome');
        return false;
    }
    
    campo.setCustomValidity('');
    console.log("Nome válido!");
    return true;
}
