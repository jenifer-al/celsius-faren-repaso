

 // Función independiente: realiza el cálculo matemático puro
const convertir = (grados, unidad) => {
    if (unidad === "C") {
        // Celsius a Fahrenheit: (°C * 9/5) + 32
        return (grados * 9 / 5) + 32;
    } else {
        // Fahrenheit a Celsius: (°F - 32) * 5/9
        return (grados - 32) * 5 / 9;
    }
};

// Referencias a los elementos
const boton = document.getElementById("calcular");
const inputNumero = document.getElementById("numero");
const selectUnidad = document.getElementById("unidad");
const resultado = document.getElementById("resultado");

// Evento: captura, procesa y muestra el resultado
boton.addEventListener("click", () => {
    const grados = parseFloat(inputNumero.value);
    const unidad = selectUnidad.value;

    if (isNaN(grados)) {
        resultado.textContent = "Introduce un número válido";
        return;
    }

    const valorFinal = convertir(grados, unidad);
    const simbolo = (unidad === "C") ? "°F" : "°C";
    
    resultado.textContent = `${valorFinal.toFixed(2)} ${simbolo}`;
});
