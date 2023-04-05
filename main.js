// Function that calculates the salary percentage for a person
function calculatePercent(person, totalSalary) {
  const personSalary = parseFloat(document.getElementById(`${person}-salary`).value);
  const percent = ((personSalary / totalSalary) * 100).toFixed(2);
  document.getElementById(`${person}-salary-percent`)
    .textContent = isNaN(percent) ? "-" : percent + "%";
}

// Function that updates salary total and percentage
function updateTotals() {
  const lucianoSalary = parseFloat(document.getElementById("luciano-salary").value);
  const lautaroSalary = parseFloat(document.getElementById("lautaro-salary").value);
  const totalSalary = lucianoSalary + lautaroSalary;

  // Update total salary
  document.getElementById("total-salary").textContent = 
    isNaN(totalSalary) ? "-" : totalSalary.toFixed(2);

  // Update porcent
  calculatePercent("luciano", totalSalary);
  calculatePercent("lautaro", totalSalary);
}

// Function that calculates the amounts to be paid per person
function calculatePay() {
  const lucianoPercent = 
    parseFloat(document.getElementById("luciano-salary-percent").textContent);
  const lautaroPercent =
    parseFloat(document.getElementById("lautaro-salary-percent").textContent);
  const totalPay = parseFloat(document.getElementById("total-pay").value);
  
  // Calculate the amount to be paid for each person
  const lucianoPay = (totalPay * (lucianoPercent / 100)).toFixed(2);
  const lautaroPay = (totalPay * (lautaroPercent /100)).toFixed(2);
  
  // Update payment columns for each person
  document.getElementById("luciano-pay").textContent = 
    isNaN(lucianoPay) ? "-" : lucianoPay;
  document.getElementById("lautaro-pay").textContent = 
    isNaN(lautaroPay) ? "-" : lautaroPay;
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Update totals when loading the page
  updateTotals();
  calculatePay();
});

document.getElementById("luciano-salary").addEventListener("input", () => {
  updateTotals();
  calculatePay();
});

document.getElementById("lautaro-salary").addEventListener("input", () => {
  updateTotals();
  calculatePay();
});

document.getElementById("total-pay").addEventListener("input", () => {
  calculatePay();
});
