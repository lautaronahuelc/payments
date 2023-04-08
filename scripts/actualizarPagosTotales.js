import {
  tagsPagoLuciano,
  tagspagoLautaro,
  tagPagoTotalLuciano,
  tagPagoTotalLautaro,
} from "./const.js";

export function actualizarPagosTotales() {
  tagPagoTotalLuciano.textContent = calcularPagoTotal(tagsPagoLuciano);
  tagPagoTotalLautaro.textContent = calcularPagoTotal(tagspagoLautaro);
}

function calcularPagoTotal(tags) {
  let pagoTotal = 0;

  tags.forEach((tag) => {
    const valor = parseFloat(tag.textContent);

    if (!isNaN(valor)) pagoTotal += valor;
  });

  return pagoTotal.toFixed(2);
}