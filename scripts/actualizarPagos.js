import {
  tagsPagoLuciano,
  tagspagoLautaro,
  inputIngresoLuciano,
  inputIngresoLautaro,
} from "./const.js";
import { mostrarContenido } from "./mostrarContenido.js";
import { actualizarPagosTotales } from "./actualizarPagosTotales.js";

export function actualizarPagos() {
  const ingresoLuciano = parseFloat(inputIngresoLuciano.value);
  const ingresoLautaro = parseFloat(inputIngresoLautaro.value);
  const ingresoTotal = ingresoLuciano + ingresoLautaro;

  calcularPagosParciales(tagsPagoLuciano, ingresoLuciano, ingresoTotal);
  calcularPagosParciales(tagspagoLautaro, ingresoLautaro, ingresoTotal);

  actualizarPagosTotales();
}

function calcularPagosParciales(tags, ingresoPersona, ingresoTotal) {
  tags.forEach((tag) => {
    const gastoTotal = parseFloat(tag.parentElement.querySelector("input").value);
    const pagoParcial = (ingresoPersona / ingresoTotal) * gastoTotal;
    mostrarContenido(tag, pagoParcial);
  });
}
