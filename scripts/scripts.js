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
let expence = [];
let incomeTotal = getSum(income);
let expenceTotal = getSum(expence);
let netIncome = incomeTotal + expenceTotal;

let transaction={
    id:"",
    transDate: "",
    transType: "",
    transAmount: "",
    transCurrency: "",
    transPayer: "",
    tranPayee: ""
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

function getSum(array){
    sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
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
    if (isFormEmpty){
        return;
    }

    else{
        let newTransaction = transaction;
        newTransaction.id = transactionNumber;
        newTransaction.transDate = date.value;
        newTransaction.transType = transactionType.value;
        newTransaction.transAmount = amount.value;
        newTransaction.transCurrency = currencyPaid.value;
        newTransaction.tranPayee = payee.value;
        newTransaction.transPayer = payer.value;
        transactionNumber += 1;
        console.log(newTransaction); 
        allTransaction.push(newTransaction);
        addTable(newTransaction);
        removePopup();
    }
}

function addTable(newtrans){
    bodyTable.innerHTML += ` <tr id = "${newtrans.id}">
    <td id="tdate">${newtrans.transDate}</td>
    <td id="tTransactionType">${newtrans.transType}</td>
    <td id="tAmount">${newtrans.transType}</td>
    <td id="tCurrency Paid">${newtrans.transCurrency}</td>
    <td id="tPayer">${newtrans.transPayer}</td>
    <td id="tPayee">${newtrans.tranPayee}</td>
    <td id="tAction"><i class="fa-regular fa-pen-to-square"></i>
    <i class="fa-regular fa-xmark"></i>
    </td>
    </tr> `;
    return;
}

// function openCurrencyMenu(){
//     content.classList.add("display-content");
// }


function isFormEmpty() {  

    var inputs = transactionForm.querySelectorAll('input'); 
        
    for (var i = 0; i < inputs.length; i++) { 
        if (inputs[i].value.trim() !== '') { 
            return false; 
        } 
    } 
        
    return true;
}

