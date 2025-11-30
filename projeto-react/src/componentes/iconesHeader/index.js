import './estilo.css';
import sacola from '../../imagens/sacola.svg';
import perfil from '../../imagens/perfil.svg';

const icones = [perfil, sacola];

function iconesHeader() {
    return(
  <ul className='icones'>
      {icones.map((icone)=>(
        <li key={icone} className='iconesHeader'><img src={icone} alt='icones'></img></li>
      ))}
  </ul>

    )
    
}
export default iconesHeader;