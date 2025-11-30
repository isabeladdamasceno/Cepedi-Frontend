import './estilo.css';
import Titulo from '../Titulo';
import NovosLivrosContainer from '../NovosLivrosContainer';
import UltimosLancamentosContainer from '../UltimosLancamentosContainer';
import { livros } from'./dadosUltimosLancamentos.js'

function UltimosLancamentos() {
    return(
        <UltimosLancamentosContainer className="ultimos_lancamentos_container">
    <Titulo>Últimos Lançamentos</Titulo>

    <NovosLivrosContainer className="novos_livros">
        { livros.map(livro => (
            <img src={livro.src} alt="livro" key={livro.id} />
        ))}
    </NovosLivrosContainer>
</UltimosLancamentosContainer>

    )
    
}
export default UltimosLancamentos;
