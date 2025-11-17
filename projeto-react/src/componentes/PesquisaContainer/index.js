import './estilo.css';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import { useState } from 'react';
import { livros } from'./dadosPesquisa.js';

function PesquisaContainer() {
  const [ livrosPesquisados, setLivrosPesquisados ] = useState([]);

    return(
  <section>
    <Titulo>Já sabe por onde começar?</Titulo>
    <Subtitulo>Encontre seu produto</Subtitulo>
    <input placeholder="Digite aqui o que deseja!" onBlur={evento => {
      const textoDigitado = evento.target.value
      const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
      setLivrosPesquisados(resultadoPesquisa);
    }}
      />

      {livrosPesquisados.map ( livro => (
        <div>
          <p>{livro.nome}</p>
          <img src={livro.src} alt='livro'/>
        </div>
      ))}
  </section>

    );
    
}
export default PesquisaContainer;