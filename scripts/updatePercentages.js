import {
  ingresoLucianoInput,
  ingresoLautaroInput,
  porcentajeLucianoInput,
  porcentajeLautaroInput,
  salarioTotalInput,
} from "./const.js";
import { calculatePercentage } from "./calculatePercentage.js";
import { updatePayments } from "./updatePayments.js";
import { setTextContent } from "./setTextContent.js";

export function updatePercentages() {
  const lucianoSalary = parseFloat(ingresoLucianoInput.value);
  const lautaroSalary = parseFloat(ingresoLautaroInput.value);
  const totalSalary = lucianoSalary + lautaroSalary;

  const lucianoPercentage = calculatePercentage(lucianoSalary, totalSalary);
  const lautaroPercentage = calculatePercentage(lautaroSalary, totalSalary);

  setTextContent(porcentajeLucianoInput, lucianoPercentage);
  setTextContent(porcentajeLautaroInput, lautaroPercentage);
  setTextContent(salarioTotalInput, totalSalary);

  updatePayments();
}
