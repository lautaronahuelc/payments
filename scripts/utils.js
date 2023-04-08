// Function that calculates who has to pay the differece
function calculateDifference() {
  const lucianoPay = parseFloat(
    document.getElementById("luciano-pay").textContent
  );
  const lautaroPay = parseFloat(
    document.getElementById("lautaro-pay").textContent
  );
  const conclusionElement = document.getElementById("conclusion");

  if (isNaN(lucianoPay) || isNaN(lautaroPay) || lucianoPay === lautaroPay) {
    conclusionElement.textContent = "";
    return;
  }

  if (lucianoPay < lautaroPay) {
    conclusionElement.textContent = `Conclusión: Lautaro transfiere ${
      lautaroPay - lucianoPay
    }`;
  } else {
    conclusionElement.textContent = `Conclusión: Luciano transfiere ${
      lucianoPay - lautaroPay
    }`;
  }
}
