import { inputIngresoLuciano, inputIngresoLautaro } from "./scripts/const.js";
import { actualizarPagos } from "./scripts/actualizarPagos.js";
import { actualizarPorcentajes } from "./scripts/actualizarPorcentajes.js";

document.addEventListener("DOMContentLoaded", actualizarPorcentajes);
inputIngresoLuciano.addEventListener("input", actualizarPorcentajes);
inputIngresoLautaro.addEventListener("input", actualizarPorcentajes);

const inputsGastos = document.querySelectorAll("#gastos input");
inputsGastos.forEach((input) => {
  input.addEventListener("input", actualizarPagos);
});
