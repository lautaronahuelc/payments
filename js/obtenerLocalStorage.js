export function obtenerLocalStorage() {
  const x = localStorage.getItem("ingresoLuciano");
  const y = localStorage.getItem("ingresoLautaro");

  document.getElementById('ingreso-luciano').value = x;
  document.getElementById('ingreso-lautaro').value = y;
}