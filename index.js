const form = document.querySelector('#tax-form');
const taxResult = document.querySelector('#tax-result');

function calculateIncomeTax(income) {
    let tax = 0;
    if (income <= 300000) {
      tax = 0;
    } else if (income > 300000 && income <= 600000) {
      tax = (income - 300000) * 0.05;
    } else if (income > 600000 && income <= 900000) {
      tax = (income - 600000) * 0.1 + (300000 - 300000) * 0.05;
    } else if (income > 900000 && income <= 1200000) {
      tax = (income - 900000) * 0.15 + (300000 - 600000) * 0.1 + (300000 - 300000) * 0.05;
    } else if (income > 1200000 && income <= 1500000) {
      tax = (income - 1200000) * 0.2 + (300000 - 900000) * 0.15 + (300000 - 600000) * 0.1 + (300000 - 300000) * 0.05;
    } else {
      tax = (income - 1500000) * 0.3 + (300000 - 1200000) * 0.2 + (300000 - 900000) * 0.15 + (300000 - 600000) * 0.1 + (300000 - 300000) * 0.05;
    }
    return tax;
  }

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const income = Number(form.income.value);

    const tax = calculateIncomeTax(income);
    alert(`The income tax for an income of ${income} is: ${tax}`);

})  