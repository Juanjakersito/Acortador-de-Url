import React from 'react'
import { insertarValueAInput } from '../../services/insertarValueAInput'
import './UrlsDisponibles.css'
function UrlsDisponibles({ urlsDisponibles }) {


  return (
    <>
      <div className="urls-disponibles">
        {urlsDisponibles ? <><h3>El nombre que deseas usar ya esta ocupado</h3>
          <h3>Aquí hay algunas recomendaciones de nombres disponibles</h3></> : ''}
    <div className="urls">
        {urlsDisponibles ? urlsDisponibles.map(url => {
          return <button onClick={() => { insertarValueAInput('urlPersonalizada', url) }}>{url}</button>
        }) : ''}
        </div>
      </div>
    </>

  )
}

export default UrlsDisponibles