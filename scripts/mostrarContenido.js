export function mostrarContenido(tag, valor) {
  tag.textContent = isNaN(valor) ? "-" : `${valor.toFixed(2)}%`;
}
