document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}

window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}

window.onscroll = function() {
    showScrollTopButton();
  };
  
function showScrollTopButton() {
    var button = document.getElementById("scrollTopButton");
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
}
  
function scrollToTop() {
    document.documentElement.scrollTop = 0; // Para navegadores que soportan scrollTop
    document.body.scrollTop = 0; // Para navegadores que no soportan scrollTop
}
  

window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    var scrollPosition = window.innerHeight + window.pageYOffset;
    var pageHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= pageHeight) {
      footer.style.display = "block";
    } else {
      footer.style.display = "none";
    }
});


function openPDF() {
  var pdfURL = "/files/capone/RESUMEN CAPITULO I_2.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Abre el PDF en una nueva ventana o pestaña
  window.open(pdfURL, "_blank");
}

function downloadPDF() {
  var pdfURL = "/files/capone/RESUMEN CAPITULO I_2.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Descarga el PDF
  var link = document.createElement("a");
  link.href = pdfURL;
  link.download = "prueba1.pdf"; // Reemplaza con el nombre que desees para el archivo descargado
  link.click();
}

function openPDF2() {
  var pdfURL = "/files/captwo/CAPITULO2.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Abre el PDF en una nueva ventana o pestaña
  window.open(pdfURL, "_blank");
}

function downloadPDF2() {
  var pdfURL = "/files/capTWO/CAPITULO2.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Descarga el PDF
  var link = document.createElement("a");
  link.href = pdfURL;
  link.download = "ARCHIVO2.pdf"; // Reemplaza con el nombre que desees para el archivo descargado
  link.click();
}

function openPDF3() {
  var pdfURL = "/files/capthree/CAPITULO3.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Abre el PDF en una nueva ventana o pestaña
  window.open(pdfURL, "_blank");
}

function downloadPDF3() {
  var pdfURL = "/files/capthree/CAPITULO3.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Descarga el PDF
  var link = document.createElement("a");
  link.href = pdfURL;
  link.download = "archivo3.pdf"; // Reemplaza con el nombre que desees para el archivo descargado
  link.click();
}

function openPDF4() {
  var pdfURL = "/files/capfour/CAPITULO4.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Abre el PDF en una nueva ventana o pestaña
  window.open(pdfURL, "_blank");
}

function downloadPDF4() {
  var pdfURL = "/files/capfour/CAPITULO4.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Descarga el PDF
  var link = document.createElement("a");
  link.href = pdfURL;
  link.download = "archivo4.pdf"; // Reemplaza con el nombre que desees para el archivo descargado
  link.click();
}


function openPDF5() {
  var pdfURL = "/files/capfive/CAPITULO5.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Abre el PDF en una nueva ventana o pestaña
  window.open(pdfURL, "_blank");
}

function downloadPDF5() {
  var pdfURL = "/files/capfive/CAPITULO5.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Descarga el PDF
  var link = document.createElement("a");
  link.href = pdfURL;
  link.download = "archivo5.pdf"; // Reemplaza con el nombre que desees para el archivo descargado
  link.click();
}

function openPDF6() {
  var pdfURL = "/files/capfive/CAPITULO5.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Abre el PDF en una nueva ventana o pestaña
  window.open(pdfURL, "_blank");
}

function downloadPDF6() {
  var pdfURL = "/files/capsix/CAPITULO6.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Descarga el PDF
  var link = document.createElement("a");
  link.href = pdfURL;
  link.download = "archivo6.pdf"; // Reemplaza con el nombre que desees para el archivo descargado
  link.click();
}


function descargarArchivo() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "RESUMENCAPITULOI_2.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBoton").addEventListener("click", descargarArchivo);



function descargarArchivo2() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "CAPITULO2.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBoton2").addEventListener("click", descargarArchivo2);



function descargarArchivo3() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "CAPITULO3.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBoton3").addEventListener("click", descargarArchivo3);


function descargarArchivo4() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "CAPITULO4.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBoton4").addEventListener("click", descargarArchivo4);


function descargarArchivo5() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "CAPITULO5.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBoton5").addEventListener("click", descargarArchivo5);


function descargarArchivo6() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "CAPITULO6.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBoton6").addEventListener("click", descargarArchivo6);

function descargarArchivoExtra() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "GuiaPractica9.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBotonExtra").addEventListener("click", descargarArchivoExtra);



function descargarArchivoExtra2() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "Guia11ROBasicaMonomodo.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBotonExtra2").addEventListener("click", descargarArchivoExtra2);


function descargarArchivoExtra3() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "Guia12ROBasicaMultimodo.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBotonExtra3").addEventListener("click", descargarArchivoExtra3);


function descargarArchivoExtra4() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "PRACTICA2MULTIPLEXACIONWDM2A1.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBotonExtra4").addEventListener("click", descargarArchivoExtra4);


function descargarArchivoExtra5() {
  // Contenido del archivo Word (puedes cambiar el contenido aquí)
  const contenido = "¡Hola! Este es un archivo Word de ejemplo.";

  // Crear un nuevo Blob con el contenido y el tipo de archivo
  const blob = new Blob([contenido], { type: "application/msword" });

  // Crear un enlace para descargar el archivo
  const url = URL.createObjectURL(blob);
  const enlaceDescarga = document.createElement("a");

  enlaceDescarga.href = url;
  enlaceDescarga.download = "Practica6.doc"; // Nombre del archivo Word

  // Agregar el enlace al DOM y simular un clic para descargar el archivo
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

// Asignar el evento click al botón para activar la descarga
document.getElementById("descargarBotonExtra5").addEventListener("click", descargarArchivoExtra5);