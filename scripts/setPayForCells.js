import { setTextContent } from "./setTextContent.js";

export function setPayForCells(cells, salary, totalSalary) {
  cells.forEach((cell) => {
    const expense = parseFloat(cell.parentElement.querySelector("input").value);
    const pay = (salary / totalSalary) * expense;
    setTextContent(cell, pay);
  });
}