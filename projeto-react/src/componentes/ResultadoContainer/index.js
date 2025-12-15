import './estilo.css';

export default function ResultadoContainer({children, onClick}){
      return( 
      <div className='resultadoContainer' onClick={onClick}>
        {children}
        </div>
      )
}