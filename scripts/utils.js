export function formatoNumero(texto) {
  const textoSinPunto = texto.replace(".", "");
  const textoFormateado = textoSinPunto.replace(",", ".");
  let numeroFormateado;

  if (textoFormateado.startsWith("$")) {
    numeroFormateado = parseFloat(textoFormateado.slice(1));
  } else if (textoFormateado.endsWith("%")) {
    numeroFormateado = parseFloat(textoFormateado.slice(0, -1));
  } else {
    numeroFormateado = parseFloat(texto);
  }

  return numeroFormateado;
}

export function formatoPorcentaje(numero) {
  return numero.toLocaleString("es-AR", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatoPrecio(numero) {
  return numero.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function mostrarContenido(tag, content) {
  content.includes("NaN")
    ? (tag.textContent = "-")
    : (tag.textContent = content);
}
