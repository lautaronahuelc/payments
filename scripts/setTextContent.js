export function setTextContent(element, variable) {
  element.textContent = isNaN(variable) ? "-" : `${variable.toFixed(2)}%`;
}
