import './estilo.css'

export default function Subtitulo({ children, classe }) {
  return <h3 className={classe}>{children}</h3>
}
