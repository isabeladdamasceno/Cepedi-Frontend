export default function validaSexo(campo) {

    const sexos = document.querySelectorAll('sexo');
    const algumSelecionado = Array.from(sexos).some(sexo => sexo.checked);
    
    if (!algumSelecionado) {
        campo.setCustomValidity('Selecione o sexo !');
        return false;
    }
    
    campo.setCustomValidity('');
    return true;
}