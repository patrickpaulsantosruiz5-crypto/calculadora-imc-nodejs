const modulo = require("./IMC.js");

const pesoPrueba = 80;
const alturaPrueba = 1.75;

console.log("=== IMC version 1.0 ===");
const alumno = modulo.calcularIMC_1_0(pesoPrueba, alturaPrueba);
console.log(`El IMC es : ${alumno.toFixed(2)}`);

console.log("\n=== IMC version 2.0 ===");
const alumno2 = modulo.calcularIMC_2_0(pesoPrueba, alturaPrueba);
console.log(`El IMC V2 es : ${alumno2.toFixed(2)}`);

console.log("\n=== IMC version 3.0 ===");
const resultado3 = modulo.calcularIMC_3_0(pesoPrueba, alturaPrueba);
if (resultado3) {
    console.log(`IMC: ${resultado3.imc.toFixed(2)}`);
    console.log(`Clasificación: ${resultado3.clasificacion}`);
}