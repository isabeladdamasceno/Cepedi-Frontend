import './estilo.css'
import Titulo from '../Titulo'
import Subtitulo from '../Subtitulo'

export default function CardRecomenda({ titulo, subtiulo, descrição, img }) {
    return (
        <div className="card">

            <div className="cardConteudo">
                <Titulo classe="cardTitulo">{titulo}</Titulo>
                <Subtitulo classe="cardSubtitulo">{subtiulo}</Subtitulo>
                <p className="cardDescricao">{descrição}</p>
            </div>

            <div className="cardImagem">
                <img src={img} alt={titulo} />
                <button>Saiba mais</button>
            </div>
            
        </div>
    );
}
