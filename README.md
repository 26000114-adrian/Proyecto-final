Proyecto Final: Cotizador TK-U (Versión Puntos Extra)
Funcionamiento del Programa
El programa utiliza un ciclo de control para permitir múltiples cotizaciones consecutivas sin reiniciar la aplicación. Utiliza estructuras condicionales anidadas para evaluar el perfil del cliente y acumuladores numéricos para gestionar los distintos recargos sobre el precio base.


Partes del Problema a Considerar
* Validación estricta: Es crucial asegurar que solo mayores de edad sean procesados.
* Acumulación de recargos: Los porcentajes deben calcularse sobre el precio base de Q.2,000 para mantener la precisión matemática.
* Nuevos Factores: Se integraron recargos por propiedades y nivel salarial para un perfil de riesgo más completo.


Posibles Mejoras
Interfaz Gráfica: Sustituir los cuadros de diálogo prompt y alert por un formulario HTML para mejorar la experiencia del usuario.

Persistencia de Datos: Implementar un sistema para guardar las cotizaciones generadas en un archivo o base de datos.

Validación de Entradas: Agregar filtros para evitar que el usuario ingrese texto en campos de números o valores negativos en el salario.
