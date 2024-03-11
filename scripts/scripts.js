// To add A transaction to the table
/* <tr id = "">
<td id="tdate"></td>
<td id="tTransactionType"></td>
<td id="tAmount"></td>
<td id="tCurrency Paid"></td>
<td id="tPayer"></td>
<td id="tPayee"></td>
<td id="tAction"><i class="fa-regular fa-pen-to-square"></i>
<i class="fa-regular fa-xmark"></i>
</td>
</tr> */

/* <button type="button" id="add-transaction" onclick="addPopup()">Add</button>
<div class="popup" id="transaction-popup">
    <img src="assets/404-tick.png"/>
    <h2>Thank You!</h2>
    <p>Your details has been successfully submitted. Thanks!</p>
    <button type="button" onclick="closePopup()">OK</button> */

let transactionNumber = 0;
let allTransaction = [];
let income = [];
let expense = [];
let incomeTotal = getSum(income);
let expenseTotal = getSum(expense);
let netIncome = incomeTotal - expenseTotal;
let transaction={
    id:"",
    transDate: "",
    transType: "",
    transAmount: "",
    transCurrency: "",
    transPayer: "",
    transPayee: ""
}

let popupTransaction = document.getElementById("transaction-popup")
// let mainButton = document.getElementById("main-button")
// let content = document.getElementById("content")

let date = document.getElementById("date");
let transactionType = document.getElementById("transaction-type");
let amount = document.getElementById("amount");
let currencyPaid = document.getElementById("currency-paid");
let payer = document.getElementById("payer");
let payee = document.getElementById("payee");
let transactionForm = document.getElementById("transaction-form")
let bodyTable = document.getElementById("tbody");
const rowRemover = document.querySelectorAll(".row-remove");

function loadData(){
    allTransaction = JSON.parse(localStorage.getItem("transactions"));
    transactionNumber = allTransaction.length;
    console.log(allTransaction);
}

loadData();

function renderLoadedData(){
    for(i=0; i < allTransaction.length;i++){
        addTable(allTransaction[i]);
        updateIncome(allTransaction[i]);
        renderNetIncomeData();
    }
}

renderLoadedData();

function getSum(array){
    sum=0;
    for(let i = 0; i < array.length; i++){
        sum += Number(array[i]);
        console.log(Number(array[i]));
    }
    return sum;
}

function addPopup(){
    popupTransaction.classList.add("open-popup");
}

function removePopup(){
    popupTransaction.classList.remove("open-popup");
}

function addTransaction(){

    if(formIsEmpty(transactionForm)){
        alert("form is missing");
    }

    else if(transactionType.value.toUpperCase() != "EXPENSE" && transactionType.value.toUpperCase() != "INCOME"){
        alert("Type should be: Expense or Income");
    }
    
    else if(currencyPaid.value.toUpperCase() != "USD" && currencyPaid.value.toUpperCase() != "AED" && currencyPaid.value.toUpperCase() != "LBP" && currencyPaid.value.toUpperCase() != "EURO"){
        alert("Currency is Invalid");
    }

    else{
        let newTransaction = transaction;
        newTransaction.id = transactionNumber;
        newTransaction.transDate = date.value;
        newTransaction.transType = transactionType.value.toUpperCase();
        newTransaction.transAmount = amount.value;
        newTransaction.transCurrency = currencyPaid.value.toUpperCase();
        newTransaction.transPayee = payee.value;
        newTransaction.transPayer = payer.value;
        transactionNumber += 1;
        console.log(newTransaction); 
        allTransaction.push(newTransaction);
        saveTransactions(allTransaction);
        addTable(newTransaction);
        updateIncome(newTransaction);
        renderNetIncomeData();
        removePopup();
    }
}

function addTable(newtrans){
    bodyTable.innerHTML += ` <tr id = "${newtrans.id}">
    <td id="tdate">${newtrans.transDate}</td>
    <td id="tTransactionType">${newtrans.transType}</td>
    <td id="tAmount">${newtrans.transAmount}</td>
    <td id="tCurrency Paid">${newtrans.transCurrency}</td>
    <td id="tPayer">${newtrans.transPayer}</td>
    <td id="tPayee">${newtrans.transPayee}</td>
    <td id="tAction"><i class="fa-regular fa-pen-to-square"></i>
    <i class="fa-regular fa-xmark"></i>
    </td>
    </tr> `;
    return;
}

function openCurrencyMenu(){
    content.classList.add("display-content");
}


function formIsEmpty(form) { 
    let inputs = form.getElementsByTagName('input')
    console.log(inputs)
  for (let i = 0; i < inputs.length; i++) { 
    if (inputs[i].value.length == 0) return true; 
  } 
  return false; 
}

function renderNetIncomeData(){
    incomeTotal = getSum(income);
    expenseTotal = getSum(expense);
    let netIncome = incomeTotal - expenseTotal;
    incomeCard = document.getElementById('total-income');
    expenseCard = document.getElementById('total-expense');
    totalCard = document.getElementById('total');
    incomeCard.innerText = `$${incomeTotal}.00`
    expenseCard.innerText = `$${expenseTotal}.00`
    totalCard.innerText = `$${netIncome}.00`
    console.log(netIncome);
    console.log(incomeTotal);
}

function saveTransactions(allTransaction){
    localStorage.setItem("transactions", JSON.stringify(allTransaction));
}

function updateIncome(transaction){
    if (transaction.transType == "EXPENSE"){
        expense.push(transaction.transAmount);
    }
    else{
        income.push(transaction.transAmount);
    }
}

function removeRow(id){
    id.closest('tr').remove;
}

// function updateCurrency(this){
//     newCurrency = this.innerText

// }

function getCurrencyObject(URL){
    let currencyData = fetch(URL)
     .then(res =>{
        if(res.ok){
            console.log('SUCCESS')
        }
        else{
            console.log('Not Successful')
        }
     })
     .then(data => console.log(data))
     .catch(error => console.error('ERROR'));
}

getCurrencyObject('https://dull-pink-sockeye-tie.cyclic.app/students/available');