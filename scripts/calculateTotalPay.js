export function calculateTotalPay(cells) {
  let totalPay = 0;

  cells.forEach((cell) => {
    const number = parseFloat(cell.textContent);

    if (!isNaN(number)) totalPay += number;
  });

  return totalPay.toFixed(2);
}
