import { useState } from "react";
import { retornaValorDelInput } from "../services/retornaValorDelInput";





export function useUrls(){

    const [urlAcortada,setUrlAcortada]=useState();
    const [urlsDisponibles,setUrlsDisponibles]=useState();
    const [mensaje,setMensaje]=useState();

  function verificarUrlDestino(){
    if(retornaValorDelInput('urlDestino')==''){
      setUrlAcortada('Rellena todos los campos')
      return true
    }
  }

   function acortarUrl(API_URL){
    
    if(verificarUrlDestino()){return}
    
    let contents={
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        url_destino : retornaValorDelInput('urlDestino'),
        url_llave: retornaValorDelInput('urlPersonalizada')
      })
      }
    fetch(API_URL,contents)
    .then(res=>res.json())
    .then((data)=>{
      setUrlAcortada(data['url_acortada'])
      setUrlsDisponibles(data['urls_disponibles'])
      setMensaje(data['mensaje'])
      console.log(data)
    })
  }


 return {acortarUrl,urlAcortada,urlsDisponibles,mensaje}

}