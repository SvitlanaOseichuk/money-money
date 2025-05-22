const amountImput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const resultText = document.getElementById('result');
const oneConvert = document.getElementById('one-to-convert');
const themeBtn = document.getElementById('theme-btn');


async function loadCurrencies() {

  try { 
    const response = await fetch('/api/currencies');
    const data = await response.json();

    const currencies = Object.keys(data);
    console.log(currencies);

    currencies.forEach(currenciy => {
      let option1 = document.createElement('option');
      option1.value = currenciy;
      option1.textContent = currenciy;

      let option2 = option1.cloneNode(true);

      fromCurrency.appendChild(option1);
      toCurrency.appendChild(option2);
    });

    fromCurrency.value = localStorage.getItem('fromCurrency') || 'USD';
    toCurrency.value = localStorage.getItem('toCurrency') || 'EUR';
    amountImput.value = localStorage.getItem('amount') || '';
    resultText.textContent = localStorage.getItem('convertedAmount') || '';
    oneConvert.textContent = localStorage.getItem('convertedText') || '';

    console.log(data);

  } catch (error) {
    console.error(error.message)
  } 
}


async function convertCurrency() {
  const amount = parseFloat(amountImput.value);

  if (isNaN(amount) || amount <= 0) {
    oneConvert.textContent = 'Enter the correct amount';
    return;
  }

  const from = fromCurrency.value;
  const to = toCurrency.value;

  try {
    const response = await fetch(`/api/convert?from=${from}&to=${to}&amount=${amount}`);
    const data = await response.json();

    if (data.convertedAmount) {
      const rate = data.convertedAmount;
      oneConvert.textContent = `1 ${from} = ${rate} ${to}`;
      resultText.textContent = rate;   
    } else {
      oneConvert.textContent = 'Error getting exchange rate';
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }

  localStorage.setItem('amount', amount);
  localStorage.setItem('fromCurrency', from);
  localStorage.setItem('toCurrency', to);
  localStorage.setItem('convertedAmount', resultText.textContent);
  localStorage.setItem('convertedText', oneConvert.textContent);
}


function toggleTheme() {
  const currentTheme = document.body.classList.contains('green') ? 'green' : 'pink';
  const newTheme = currentTheme === 'green' ? 'pink' : 'green';

  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
}



window.addEventListener('load', () => {
  loadCurrencies();

  const savedTheme = localStorage.getItem('theme') || 'green';
  document.body.classList.add(savedTheme);
});
convertBtn.addEventListener('click', convertCurrency);
themeBtn.addEventListener('click', toggleTheme);
amountImput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    convertCurrency();
  }
});

// 1 додвти Node.js
// 2 css щоб не скакало коли немає і є p '
// add locale storage '' DONE ''
// додати щоб він був зверху і його можна рухать ?
// add теми '' DONE'§§§§
// коли у input 0 то result щоб теж був сірим
// dom?
// щоб міняти місцями