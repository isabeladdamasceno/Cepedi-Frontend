import './App.css';
import Logo from './componentes/Logo';
import sacola from './imagens/sacola.svg';
import perfil from './imagens/perfil.svg';

const textOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icones = [perfil, sacola];


function App() {
  return (
    <div className='App'>
   <header className='App-header'>
    <Logo></Logo>

    <ul className='opcoes'>
      {textOpcoes.map((opcao)=>(
        <li key={opcao} className='opcao'>{opcao}</li>
      ))}

    </ul>

  <ul className='iconesHeader'>
      {icones.map((icone)=>(
        <li key={icone} className='iconesHeader'><img src={icone} alt='icones'></img></li>
      ))}
  </ul>

   </header>

   </div>
  );
}

export default App;
