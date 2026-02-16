// Precio base
var precio_base = 2000;

// Porcentajes de recargo base
var edad_18 = 0.1, edad_25 = 0.2, edad_50 = 0.3;
var casado_18 = 0.1, casado_25 = 0.2, casado_50 = 0.3;
var hijos_recargo = 0.2;

// NUEVOS porcentajes para puntos extra
var propiedad_recargo = 0.35; // 35% por propiedad
var salario_recargo = 0.05;   // 5% sobre el salario

var continuar = "";

// El programa se ejecutará hasta que el usuario ingrese "Salir"
while (continuar.toUpperCase() !== "SALIR") {
    
    var nombre = prompt("Ingrese su nombre, o escriba 'Salir' para terminar");
    if (nombre.toUpperCase() === "SALIR") break;

    var edad = parseInt(prompt("¿Cuántos años tiene?"));

    if (edad < 18) {
        alert("Error: El asegurado debe ser mayor de edad.");
    } else {
        var recargo_total = 0;

        // 1. Recargo por edad del asegurado
        if (edad >= 18 && edad < 25) recargo_total += precio_base * edad_18;
        else if (edad >= 25 && edad < 50) recargo_total += precio_base * edad_25;
        else if (edad >= 50) recargo_total += precio_base * edad_50;

        // 2. Recargo por cónyuge
        var casado = prompt("¿Está casado? (SI/NO)").toUpperCase();
        if (casado === "SI") {
            var edad_conyuge = parseInt(prompt("¿Edad del esposo/a?"));
            if (edad_conyuge >= 18 && edad_conyuge < 25) recargo_total += precio_base * casado_18;
            else if (edad_conyuge >= 25 && edad_conyuge < 50) recargo_total += precio_base * casado_25;
            else if (edad_conyuge >= 50) recargo_total += precio_base * casado_50;
        }

        // 3. Recargo por hijos
        var hijos = prompt("¿Tiene hijos? (SI/NO)").toUpperCase();
        if (hijos === "SI") {
            var cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
            recargo_total += cantidad_hijos * (precio_base * hijos_recargo);
        }

        // --- PUNTOS EXTRA ---
        // 4. Recargo por propiedades
        var propiedades = parseInt(prompt("¿Cuántas propiedades tiene?"));
        recargo_total += propiedades * (precio_base * propiedad_recargo);

        // 5. Recargo por salario
        var salario = parseFloat(prompt("¿Cuál es su salario mensual?"));
        recargo_total += salario * salario_recargo;

        // Resultado
        var precio_final = precio_base + recargo_total;
        alert("Cotización para: " + nombre);
        alert("Recargo total: Q." + recargo_total);
        alert("Precio total final: Q." + precio_final);
    }
    
    continuar = prompt("¿Desea realizar otra cotización? (Escriba 'Salir' para terminar)").toUpperCase();
}