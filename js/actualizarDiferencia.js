import { tagLucianoRecibe, tagLautaroRecibe, tagDiferencia } from "./const.js";
import { formatoNumero, formatoPrecio, mostrarContenido } from "./utils.js";

export function actualizarDiferencia() {
  const lucianoRecibe = formatoNumero(tagLucianoRecibe.textContent);
  const lautaroRecibe = formatoNumero(tagLautaroRecibe.textContent);
  const maxRecibe = Math.max(lucianoRecibe, lautaroRecibe);
  const minRecibe = Math.min(lucianoRecibe, lautaroRecibe);
  const personaRecibe =
    maxRecibe === lucianoRecibe
      ? "Luciano"
      : maxRecibe === lautaroRecibe
      ? "Lautaro"
      : "";
  const diferencia = maxRecibe - minRecibe;
  const mensaje = `${personaRecibe} recibe ${formatoPrecio(diferencia)}`;

  mostrarContenido(tagDiferencia, mensaje);
}
