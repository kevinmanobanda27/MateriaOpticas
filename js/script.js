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
  var pdfURL = "/files/capfive/CAPITULO5.pdf"; // Reemplaza con la ruta correcta de tu archivo PDF
  
  // Descarga el PDF
  var link = document.createElement("a");
  link.href = pdfURL;
  link.download = "archivo5.pdf"; // Reemplaza con el nombre que desees para el archivo descargado
  link.click();
}