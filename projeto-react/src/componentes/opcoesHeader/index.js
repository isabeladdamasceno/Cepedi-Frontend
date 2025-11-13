import './estilo.css';
const textOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function opcoesHeader() {
    return(
        <ul className='opcoesHeader'>
      {textOpcoes.map((opcao)=>(
        <li key={opcao} className='opcao'>{opcao}</li>
      ))}

    </ul>

    )
}

export default opcoesHeader;