import './estilo.css';

export default function Resultado({children, onClick}){
      return <div className='resultadoPesquisa' onClick={onClick}>
            {children}
            </div>
}
   

    

