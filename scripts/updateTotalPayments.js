import {
  pagoLucianoElements,
  pagoLautaroElements,
  totalPagoLuciano,
  totalPagoLautaro,
} from "./const.js";
import { calculateTotalPay } from "./calculateTotalPay.js";

export function updateTotalPayments() {
  totalPagoLuciano.textContent = calculateTotalPay(pagoLucianoElements);
  totalPagoLautaro.textContent = calculateTotalPay(pagoLautaroElements);
}
