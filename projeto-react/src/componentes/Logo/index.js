import logo from '../../imagens/logo.svg';
import './estilo.css';

function Logo() {
    return[
         <div className="logo">
              <img src={logo} alt='logo'></img>
              <p><strong>Isabela</strong>Store </p>
            </div>
        
    ]
    
}
export default Logo;