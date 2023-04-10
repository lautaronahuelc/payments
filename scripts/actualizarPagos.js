import {
  inputIngresoLuciano,
  inputIngresoLautaro,
  tagLucianoRecibe,
  tagLautaroRecibe,
} from "./const.js";
import { actualizarDiferencia } from "./actualizarDiferencia.js";
import { formatoPrecio, mostrarContenido } from "./utils.js";

export function actualizarPagos() {
  const ingresoLuciano = parseFloat(inputIngresoLuciano.value);
  const ingresoLautaro = parseFloat(inputIngresoLautaro.value);
  const ingresoTotal = ingresoLuciano + ingresoLautaro;

  const lucianoRecibe = calcularRecibe(
    tagLucianoRecibe,
    ingresoLautaro,
    ingresoTotal
  );
  const lautaroRecibe = calcularRecibe(
    tagLautaroRecibe,
    ingresoLuciano,
    ingresoTotal
  );

  mostrarContenido(tagLucianoRecibe, formatoPrecio(lucianoRecibe));
  mostrarContenido(tagLautaroRecibe, formatoPrecio(lautaroRecibe));

  actualizarDiferencia();
}

function calcularRecibe(tag, ingresoOtraPersona, ingresoTotal) {
  const importeGasto = parseFloat(
    tag.parentElement.querySelector("input").value
  );

  return (ingresoOtraPersona / ingresoTotal) * importeGasto;
}
