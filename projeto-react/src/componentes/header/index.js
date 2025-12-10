import './estilo.css';
import Logo from '../../componentes/Logo';
import OpcoesHeader from '../../componentes/opcoesHeader';
import IconesHeader from '../../componentes/iconesHeader';
import { Link } from 'react-router-dom';


function Header() {
  return (

   <header className='header-header'>
    <Link to="/" className='link'>
    <Logo></Logo>
    </Link>
    <OpcoesHeader></OpcoesHeader>
    <IconesHeader></IconesHeader>

   </header>

 
  );
}

export default Header;
