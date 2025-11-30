import './estilo.css'
import Titulo from '../Titulo'
import Subtitulo from '../Subtitulo'
import Resultado from '../Resultado'
import { useState } from 'react'
import { livros } from'./dadosPesquisa.js'


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
    <Resultado className="resultado-item" key={livro.id}>
        <p>{livro.nome}</p>
        <img src={livro.src} alt='livro'/>
    </Resultado>
))}
  </section>

    );
    
}
export default PesquisaContainer;


