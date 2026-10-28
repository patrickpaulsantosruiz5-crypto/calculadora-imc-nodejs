// IMC.js
// Módulo para calcular el Índice de Masa Corporal (IMC).
// Tres versiones progresivas: sin validación, con validación, y con clasificación (OMS).

// ===== Versión 1.0: cálculo directo, sin validaciones =====
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

// ===== Versión 2.0: valida que los parámetros existan y sean numéricos =====
function calcularIMCV2(peso, altura) {
    if (peso === undefined || altura === undefined) {
        console.log("Error: el peso y la altura son obligatorios");
        return;
    }

    if (typeof peso !== "number" || typeof altura !== "number") {
        console.log("Error: los valores para peso y altura deben ser numéricos");
        return;
    }

    const imc = peso / (altura * altura);
    return imc;
}

// ===== Versión 3.0: valida + calcula + clasifica según la OMS =====
function calcularIMCV3(peso, altura) {
    if (peso === undefined || altura === undefined) {
        console.log("Error: es obligatorio el peso y la altura");
        return;
    }

    if (typeof peso !== "number" || typeof altura !== "number") {
        console.log("Error: los valores para peso y altura deben ser numéricos");
        return;
    }

    const imc = peso / (altura * altura);
    console.log(`El IMC V3 es : ${imc.toFixed(2)}`);

    const clasificacion = clasificadorIMC(imc);

    // Devuelve el objeto con el IMC y su clasificación
    return { imc, clasificacion };
}

// ===== Clasificador según rangos de la OMS =====
function clasificadorIMC(imc) {
    let clasificacion = "";

    switch (true) {
        case imc < 18.5:
            clasificacion = "Bajo Peso";
            break;
        case imc >= 18.5 && imc <= 24.9:
            clasificacion = "Peso Normal";
            break;
        case imc >= 25 && imc <= 29.9:
            clasificacion = "SobrePeso";
            break;
        case imc >= 30:
            clasificacion = "Obesidad";
            break;
    }

    console.log(clasificacion);
    return clasificacion;   // ← ahora devuelve el string
}

// ===== Exportaciones =====
module.exports = {
    calcularIMC_1_0: calcularIMC,
    calcularIMC_2_0: calcularIMCV2,
    calcularIMC_3_0: calcularIMCV3,
    clasificador: clasificadorIMC,
};