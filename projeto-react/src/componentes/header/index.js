import './estilo.css';
import Logo from '../../componentes/Logo';
import OpcoesHeader from '../../componentes/opcoesHeader';
import IconesHeader from '../../componentes/iconesHeader';

function Header() {
  return (

   <header className='header-header'>
    <Logo></Logo>
    <OpcoesHeader></OpcoesHeader>
    <IconesHeader></IconesHeader>

   </header>

 
  );
}

export default Header;
