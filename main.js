import { inputIngresoLuciano, inputIngresoLautaro } from "./js/const.js";
import { actualizarPagos } from "./js/actualizarPagos.js";
import { obtenerLocalStorage } from "./js/obtenerLocalStorage.js";
import { actualizarPorcentajes } from "./js/actualizarPorcentajes.js";

document.addEventListener("DOMContentLoaded", () => {
  obtenerLocalStorage();
  actualizarPorcentajes();
});
inputIngresoLuciano.addEventListener("input", actualizarPorcentajes);
inputIngresoLautaro.addEventListener("input", actualizarPorcentajes);

const inputsGastos = document.querySelectorAll("#gastos input");
inputsGastos.forEach((input) => {
  input.addEventListener("input", actualizarPagos);
});
