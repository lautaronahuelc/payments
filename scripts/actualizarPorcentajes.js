import {
  inputIngresoLuciano,
  inputIngresoLautaro,
  tagPorcentajeLuciano,
  tagPorcentajeLautaro,
  tagIngresoTotal,
} from "./const.js";
import { actualizarPagos } from "./actualizarPagos.js";
import { mostrarContenido } from "./mostrarContenido.js";

export function actualizarPorcentajes() {
  const ingresoLuciano = parseFloat(inputIngresoLuciano.value);
  const ingresoLautaro = parseFloat(inputIngresoLautaro.value);
  const ingresoTotal = ingresoLuciano + ingresoLautaro;

  const porcentajeLuciano = calcularPorcentaje(ingresoLuciano, ingresoTotal);
  const porcentajeLautaro = calcularPorcentaje(ingresoLautaro, ingresoTotal);

  mostrarContenido(tagPorcentajeLuciano, porcentajeLuciano);
  mostrarContenido(tagPorcentajeLautaro, porcentajeLautaro);
  mostrarContenido(tagIngresoTotal, ingresoTotal);

  actualizarPagos();
}

function calcularPorcentaje(ingreso, ingresoTotal) {
  return (ingreso / ingresoTotal) * 100;
}
