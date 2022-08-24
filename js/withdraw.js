// step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
   
// step 2:

const withdrawField = document.getElementById('withdraw-field');
const newWidthdrawAmountString = withdrawField.value;
const newWidthdrawAmount = parseFloat(newWidthdrawAmountString);

    // step : 7

withdrawField.value = '';

        
        // Fix NaN Problem
        if(isNaN(newWidthdrawAmount)){
            alert('Please provide a valid number')
            return;
        }

// step 5:

const balanceTotalElement = document.getElementById('balance-total');

const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

if(newWidthdrawAmount > previousBalanceTotal){
    alert('! WARNING: insufficient balance');
    return;

}






// step 3: 
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step 4: 
const currentWithdrawTotal = previousWithdrawTotal + newWidthdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;











// step 6: 
const newBalanceTotal = previousBalanceTotal - newWidthdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;






})