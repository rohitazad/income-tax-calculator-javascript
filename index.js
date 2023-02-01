const form = document.querySelector('#tax-form');
const taxResult = document.querySelector('#tax-result');

function calculateIncomeTax(income) {
    let tax = 0;
    if (income <= 300000) {
        tax = 0;
      } else if (income > 300000 && income <= 600000) {
        tax = (income - 300000) * 0.05;
      } else if (income > 600000 && income <= 900000) {
        tax = (300000 * 0.05) + (income - 600000) * 0.10;
      } else if (income > 900000 && income <= 1200000) {
        tax = (300000 * 0.05) + (300000 * 0.10) + (income - 900000) * 0.15;
      } else if (income > 1200000 && income <= 1500000) {
        tax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (income - 1200000) * 0.20;
      } else if (income > 1500000) {
        tax = (300000 * 0.05) + (300000 * 0.10) + (300000 * 0.15) + (300000 * 0.20) + (income - 1500000) * 0.30;
        console.log('1_',300000 * 0.05)
        console.log('2_',300000 * 0.10)
        console.log('3_',300000 * 0.15)
        console.log('4_',300000 * 0.20)
        console.log('5_',(income - 1500000) * 0.30)
      }
    return tax;
  }

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const income = Number(form.income.value);

    const tax = calculateIncomeTax(income);
    console.log(tax)
    alert(`The income tax for an income of ${income} is: ${tax}`);

})  