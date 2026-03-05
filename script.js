let fechaObjetivo
let eventoActual = "inicio"
let idioma = "es"


const textos = {

  inicio: {
    fechaObjetivo: "2026-06-11T00:00:00",
    es: {
      titulo: "Inicio del Mundial",
      fecha: "11 de junio de 2026",
      lugar: "📍 Estadio Azteca, Ciudad de México, México"
    },
    en: {
      titulo: "World Cup Opening Match",
      fecha: "June 11, 2026",
      lugar: "📍 Estadio Azteca, Mexico City, Mexico"
    }
  },

  final: {
    fechaObjetivo: "2026-07-19T00:00:00",
    es: {
      titulo: "Final del Mundial",
      fecha: "19 de julio de 2026",
      lugar: "📍 MetLife Stadium, Nueva York, Estados Unidos"
    },
    en: {
      titulo: "World Cup Final",
      fecha: "July 19, 2026",
      lugar: "📍 MetLife Stadium, New York, United States"
    }
  }

}


function cambiarEvento(evento){

  eventoActual = evento

  const data = textos[evento]

  fechaObjetivo = new Date(data.fechaObjetivo)

  document.getElementById("titulo").innerText =
  data[idioma].titulo

  document.getElementById("fecha").innerText =
  data[idioma].fecha

  document.getElementById("lugar").innerText =
  data[idioma].lugar

}


function actualizarContador(){

  const ahora = new Date()
  const diferencia = fechaObjetivo - ahora

  const dias = Math.floor(diferencia / (1000*60*60*24))
  const horas = Math.floor((diferencia / (1000*60*60)) % 24)
  const minutos = Math.floor((diferencia / (1000*60)) % 60)
  const segundos = Math.floor((diferencia / 1000) % 60)

  document.getElementById("tiempo").innerText =
  `${dias}d ${horas}h ${minutos}m ${segundos}s`

}

setInterval(actualizarContador,1000)


function cambiarIdioma(nuevoIdioma){
  idioma = nuevoIdioma
  cambiarEvento(eventoActual)
}


cambiarEvento("inicio")