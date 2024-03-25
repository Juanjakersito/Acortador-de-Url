export async function copiarAPortapapeles(idDelDelContenido){
    let texto = document.getElementById(idDelDelContenido).innerHTML;
    try {
      await navigator.clipboard.writeText(texto);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }