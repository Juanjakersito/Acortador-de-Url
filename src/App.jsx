import { FaRegCopy } from "react-icons/fa";
import './App.css'
import { copiarAPortapapeles } from './services/copiarEnPortapapeles';
import { useUrls } from './Hooks/useUrls';
import { FaLink, FaPenNib, FaTrashCan } from "react-icons/fa6";
import UrlsDisponibles from './components/UrlsDisponibles/UrlsDisponibles';
import { insertarValueAInput } from "./services/insertarValueAInput";

const API_ENDPOINT = 'https://acortadorurlapi.site/api/urls'
const API_PERSONALIZADA_ENDPOINT = 'https://acortadorurlapi.site/api/urls/personalizada'


function App() {

  const { acortarUrl, urlAcortada, urlsDisponibles, mensaje } = useUrls()



  return (
    <>
      <div className='contenedor-formulario'>
        <h1>Acortador de <span className='urlSpan'>url</span></h1>
        <h2>Genera url aleatoria</h2>

        <div className="contenedor-input">
          <div className="input">
            <span className='icono'><FaLink size={30}/></span>
            <input id='urlDestino' type="text" placeholder='https://www.tuUrl.com/...' ></input>
          </div>
          <button onClick={() => { acortarUrl(API_ENDPOINT) }}>!Acortar!</button>
          <button className="boton-borrar" onClick={()=>{insertarValueAInput('urlDestino','')}}><FaTrashCan  size={25}/></button>

        </div>

        <h2>Ó</h2>


        <h2>Genera tu url personalizada</h2>
        <div className="urlPersonalizada">https://acortadorurlapi.site/ + </div>
        
        <div className="contenedor-input">
          <div className="input">
            <span className='icono'><FaPenNib  size={25} /></span>
            <input id='urlPersonalizada' type="text" placeholder='HolaPaquito1243...' ></input>
          </div>
          <button onClick={() => { acortarUrl(API_PERSONALIZADA_ENDPOINT) }} >!Generar!</button>
          <button className="boton-borrar" onClick={()=>{insertarValueAInput('urlPersonalizada','')}}><FaTrashCan  size={25}/></button>
        </div>


        {mensaje ? <h3 style={{ color: 'yellow' }}>{mensaje}</h3> : ''}
        <UrlsDisponibles urlsDisponibles={urlsDisponibles} />


        <div className="contenedor-urlAcortada">
          <h2><a id='urlAcortada' target="_blank" href={urlAcortada}>{urlAcortada ? urlAcortada : 'Sin url corta'}</a></h2>
          <button onClick={() => { copiarAPortapapeles('urlAcortada') }}><FaRegCopy  size={20} /></button>
        </div>

        <span>Se utilizó <a href="https://acortadorurlapi.site/" target="_blank">acortadorurlapi</a> </span>

      </div>
    </>
  )
}

export default App
