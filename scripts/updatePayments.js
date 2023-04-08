import {
  pagoLucianoElements,
  pagoLautaroElements,
  ingresoLucianoInput,
  ingresoLautaroInput,
} from "./const.js";
import { updateTotalPayments } from "./updateTotalPayments.js";
import { setPayForCells } from "./setPayForCells.js";

export function updatePayments() {
  const lucianoSalary = parseFloat(ingresoLucianoInput.value);
  const lautaroSalary = parseFloat(ingresoLautaroInput.value);
  const totalSalary = lucianoSalary + lautaroSalary;

  setPayForCells(pagoLucianoElements, lucianoSalary, totalSalary);
  setPayForCells(pagoLautaroElements, lautaroSalary, totalSalary);
  updateTotalPayments();
}
