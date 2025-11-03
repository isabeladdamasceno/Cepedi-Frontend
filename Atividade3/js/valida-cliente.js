export default function validaCliente(campo) {
    const clientes = document.querySelectorAll('cliente');
    const escolhaUmTipo = Array.from(clientes).some(clientes => clientes.checked);
    
    if (!escolhaUmTipo) {
      campo.setCustomValidity('Selecione um tipo de cliente !');
        return false;
    }
    
    
    campo.setCustomValidity('');
    return true;
}