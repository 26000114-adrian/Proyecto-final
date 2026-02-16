// 1. Precio base de la cotización
var precio_base = 2000

// Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

var recargo_total = 0
var precio_final = 0

// Ingreso de datos
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene?")
var edad_numero = parseInt(edad)

// Requerimiento 1: Validación de mayoría de edad
if (edad_numero < 18) {
  alert("Error: El asegurado debe ser mayor de edad.")
} else {
  
  var casado = prompt("¿Está casado actualmente? (SI/NO)").toUpperCase()
  var edad_conyuge_numero = 0
  if (casado == "SI") {
    var edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
    edad_conyuge_numero = parseInt(edad_conyuge)
  }

  var hijos = prompt("¿Tiene hijos o hijas? (SI/NO)").toUpperCase()
  var cantidad_hijos_numero = 0
  if (hijos == "SI") {
    var cantidad_hijos = prompt("¿Cuantos hijos tiene?")
    cantidad_hijos_numero = parseInt(cantidad_hijos)
  }

  // --- CÁLCULO DE RECARGOS ---

  // 1. Recargo por edad del asegurado
  if (edad_numero >= 18 && edad_numero < 25) {
    recargo_total += precio_base * edad_18
  } else if (edad_numero >= 25 && edad_numero < 50) {
    recargo_total += precio_base * edad_25
  } else if (edad_numero >= 50) {
    recargo_total += precio_base * edad_50
  }

  // 2. Recargo por edad del cónyuge
  if (casado == "SI") {
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
      recargo_total += precio_base * casado_18
    } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
      recargo_total += precio_base * casado_25
    } else if (edad_conyuge_numero >= 50) {
      recargo_total += precio_base * casado_50
    }
  }

  // 3. Recargo por cantidad de hijos (20% por cada hijo)
  recargo_total += cantidad_hijos_numero * (precio_base * hijos_recargo)

  // Resultado final
  precio_final = precio_base + recargo_total

  alert("Cotización para: " + nombre)
  alert("Recargo total acumulado: Q." + recargo_total)
  alert("Precio total final: Q." + precio_final)
}
