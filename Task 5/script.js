// Get references to DOM elements
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

// Fetch available currencies from the API and populate the dropdowns
async function populateCurrencyDropdowns() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        const currencies = Object.keys(data.rates);
        
        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            fromCurrency.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = currency;
            toCurrency.appendChild(option2);
        });

        fromCurrency.value = 'USD';
        toCurrency.value = 'EUR';
    } catch (error) {
        console.error('Error fetching currency data:', error);
    }
}

// Perform currency conversion when the form is submitted
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;
    
    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const data = await response.json();
        const rate = data.rates[to];
        const convertedAmount = (amount * rate).toFixed(2);
        
        resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
    } catch (error) {
        console.error('Error fetching conversion rate:', error);
    }
});

// Call function to populate the currency dropdowns on page load
populateCurrencyDropdowns();
