import './estilo.css';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import Resultado from '../Resultado';
import { useEffect, useState } from 'react';
import { getLivros } from '../../Serviços/livros';
import { postFavoritos } from '../../Serviços/favoritos';

function PesquisaContainer() {

  const [livros, setLivros] = useState([]);
  const [ livrosPesquisados, setLivrosPesquisados ] = useState([]);

  useEffect(() => {
    fetchLivros()

  }, [])

  async function fetchLivros() {
    const livrosDaAPI = await getLivros()
    setLivros(livrosDaAPI)
    
  }

   async function insertFavorito(id) {
    await postFavoritos(id)
    alert(`Livro de id:${id} inserido!`)
    
  }

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
    <Resultado onClick={() => insertFavorito(livro.id)}>
        <p>{livro.nome}</p>
        <img src={livro.src} alt='livro'/>
    </Resultado>
))}
  </section>

    );
    
}
export default PesquisaContainer;


