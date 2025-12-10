import './estilo.css';
import Opcao from '../Opcao/index.js';
import { Link } from 'react-router-dom';
const textOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function opcoesHeader() {
    return(
        <ul className='opcoesHeader'>
      {textOpcoes.map((opcao)=>(
        <Link to={`/${opcao.toLowerCase()}`}><Opcao key={opcao}>{opcao}</Opcao></Link>
      ))}

    </ul>

    )
}

export default opcoesHeader;