document.addEventListener('DOMContentLoaded', function () {
    const balanceElement = document.getElementById('balance');
    const transactionListElement = document.getElementById('transactionList');
    const typeElement = document.getElementById('type');
    const amountElement = document.getElementById('amount');
    const currencyElement = document.getElementById('currency');

    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
})
    function updateBalance() {
        const totalBalance = transactions.reduce((total, transaction) => {
            const amountInUSD = convertCurrency(transaction.amount, transaction.currency, 'USD');
            return transaction.type === 'income' ? total + amountInUSD : total - amountInUSD;
        }, 0).toFixed(2);

        balanceElement.textContent = `Total Balance: $${totalBalance} USD`;
    }

    function renderTransactions() {
        transactionListElement.innerHTML = '';
        transactions.forEach((transaction, index) => {
            const transactionElement = document.createElement('div');
            transactionElement.classList.add('transaction');
            transactionElement.innerHTML = `
                <div>${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</div>
                <div>${transaction.amount} ${transaction.currency}</div>
                <button class="delete-btn" onclick="deleteTransaction(${index})">Delete</button>
            `;
            transactionListElement.appendChild(transactionElement);
        });
    }

    function addTransaction() {
        const type = typeElement.value;
        const amount = parseFloat(amountElement.value);
        const currency = currencyElement.value;

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        transactions.push({ type, amount, currency });
        localStorage.setItem('transactions', JSON.stringify(transactions));

        updateBalance();
        renderTransactions();

        amountElement.value = '';
    }

    function deleteTransaction(index) {
        transactions.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(transactions));

        updateBalance();
        renderTransactions();
    }

    function fetchCurrencies() {
        fetch('https://ivory-ostrich-yoke.cyclic.app/students/available')
            .then(response => response.json())
            .then(data => {
                data.forEach(currency => {
                    const optionElement = document
             })
    })
}