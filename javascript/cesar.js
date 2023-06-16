function verificarRespuesta() {
    var respuesta = document.getElementById("respuesta").value.toUpperCase();
    if (respuesta == "K") {
      alert("¡Correcto! Has adivinado la letra cifrada en el cifrado de César.");
    } else {
      alert("Lo siento, esa no es la letra que hemos cifrado. Inténtelo de nuevo.");
    }
  }

  // Palabras a adivinar
var palabras = ["CIFRADO", "ALGORITMOS", "PROGRAMACION", "SECRETO"];

// Seleccionar una palabra aleatoria
var palabra = palabras[Math.floor(Math.random() * palabras.length)];


// Cifrar la letra K con el cifrado de César
var letra = 'K';
var cifrado = "";
var clave = 2; // número de desplazamiento para cifrar la letra K con el cifrado de César
var codigo = letra.charCodeAt(0);
if (codigo >= 65 && codigo <= 90) {
  letra = String.fromCharCode(((codigo - 65 + clave) % 26) + 65); // cifrado de César
}
cifrado = letra;

console.log("La letra K cifrada con el cifrado de César es: " + cifrado);

// Pedir al usuario que adivine la palabra cifrada
var intentos = 0;
var respuesta;
while (intentos < 5 && respuesta != palabra) {
  respuesta = prompt("Adivina la palabra cifrada: " + cifrado);
  intentos++;

  // Descifrar la respuesta del usuario
  var respuestaDescifrada = "";
  for (var i = 0; i < respuesta.length; i++) {
    var letra = respuesta[i];
    var codigo = letra.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90) {
      letra = String.fromCharCode(((codigo - 65 - clave + 26) % 26) + 65); // descifrado de César
    }
    respuestaDescifrada += letra;
  }

  if (respuesta != palabra) {
    alert("Lo siento, la palabra no es correcta. La palabra cifrada es: " + cifrado +
          "\nTu respuesta descifrada es: " + respuestaDescifrada);
  }
}

// Mostrar mensaje de éxito o fracaso
if (respuesta == palabra) {
  alert("¡Correcto! Has adivinado la palabra en " + intentos + " intentos.");
} else {
  alert("Lo siento, no has adivinado la palabra. Era " + palabra + ".");
}
