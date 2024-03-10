// To add A transaction to the table
/* <tr>
<td id="date"></td>
<td id="Transaction Type"></td>
<td id="Amount"></td>
<td id="Currency Paid"></td>
<td id="Payer"></td>
<td id="Payee"></td>
<td id="Action"><i class="fa-regular fa-pen-to-square"></i>
<i class="fa-regular fa-xmark"></i>
</td>
</tr> */

let transactionNumber = 0;
let income = [];
let expence = [];
let incomeTotal = getSum(income);
let expenceTotal = getSum(expence);
let netIncome = incomeTotal + expenceTotal;

let popupTransaction = document.getElementById("transaction-popup")

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

function closePopup(){
    popupTransaction.classList.remove("open-popup");
}