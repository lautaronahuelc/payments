import { ingresoLucianoInput, ingresoLautaroInput } from "./const.js";
import { updatePayments } from "./updatePayments.js";
import { updatePercentages } from "./updatePercentages.js";

// Agregar event listener a los inputs de ingresos
document.addEventListener("DOMContentLoaded", updatePercentages);
ingresoLucianoInput.addEventListener("input", updatePercentages);
ingresoLautaroInput.addEventListener("input", updatePercentages);

// Agregar event listeners a los inputs de gastos
const expenseInputs = document.querySelectorAll("#gastos input");
expenseInputs.forEach((input) => {
  input.addEventListener("input", updatePayments);
});
