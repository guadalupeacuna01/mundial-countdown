let fechaObjetivo = new Date("2026-06-11T00:00:00")

function cambiarEvento(evento){

  if(evento === "inicio"){
    fechaObjetivo = new Date("2026-06-11T00:00:00")
    document.getElementById("titulo").innerText = "Inicio del Mundial"
    document.body.style.backgroundImage = "url('inicio.jpg')"
  }

  if(evento === "final"){
    fechaObjetivo = new Date("2026-07-19T00:00:00")
    document.getElementById("titulo").innerText = "Final del Mundial"
    document.body.style.backgroundImage = "url('final.jpg')"
  }

  if(evento === "argentina"){
    fechaObjetivo = new Date("2026-06-12T00:00:00")
    document.getElementById("titulo").innerText = "Primer partido Argentina"
    document.body.style.backgroundImage = "url('argentina.jpg')"
  }

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
