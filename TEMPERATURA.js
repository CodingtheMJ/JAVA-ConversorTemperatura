// Espera a que el documento esté listo
window.onload = function () {
    // Accede al botón y al campo de texto
    var boton = document.getElementById("convertirBtn");
    var input = document.getElementById("tempInput");
    var resultado = document.getElementById("resultado");
  
    // Cuando se hace clic en el botón, se ejecuta esta función
    boton.onclick = function () {
      var valor = input.value;
      var celsius = parseFloat(valor); // Convierte el texto a número
  
      // Verifica si lo ingresado es un número
      if (isNaN(celsius)) {
        alert("Por favor escribe un número válido.");
        resultado.innerText = ""; // Limpia el resultado
        return;
      }
  
      // Calcula Fahrenheit y Kelvin
      var fahrenheit = (celsius * 9/5) + 32;
      var kelvin = celsius + 273.15;
  
      // Muestra el resultado en pantalla
      resultado.innerHTML = "Grados Fahrenheit: " + fahrenheit.toFixed(1) + "<br>" +
                            "Grados Kelvin: " + kelvin.toFixed(2);
    };
  };
  