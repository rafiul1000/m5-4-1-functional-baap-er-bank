



document.getElementById('btn-deposit').addEventListener('click', function(){
    console.log('deposit button clicked');



 /*
1. get the element by ID
2. get the value from the element.
3. convert string value to a number

*/

const newDepositAmount = getInputFieldValueById('deposit-field');

/*
1. get previous deposit total by Id
*/

const previousDepositTotal = getTextElementValueById('deposit-total');


// calculate new deposit total

const newDepositTotal = previousDepositTotal + newDepositAmount;


// setDepositTotalValue

setTextElementValueById('deposit-total', newDepositTotal)


// get previous balance by using the function

const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal + newDepositAmount
setTextElementValueById('balance-total', newBalanceTotal)
})





