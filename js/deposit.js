// step 1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the deposit amount from the deposite input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
   
        // set 7: clear the deposit field
        depositField.value = '';
        
        // Fix NaN Problem
        if(isNaN(newDepositAmount)){
            alert('Please provide a valid number')
            return;
        }

    // step 3: get current deposit total
    // for non-input(element other than input, textarea) use .innerText to get the text
    const depositTotalElement = document.getElementById('deposite-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);



     // step 4: add Numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the balance total
    depositTotalElement.innerText = currentDepositTotal;


    // set 5: get total current total
const balanceTotalElement = document.getElementById('balance-total');
const preiousBalanceTotalString = balanceTotalElement.innerText;
const preiousBalanceTotal = parseFloat(preiousBalanceTotalString);

// step 6 : culculate current total balance
const currentBalanceTotal = preiousBalanceTotal + newDepositAmount;
// st the balance total
balanceTotalElement.innerText = currentBalanceTotal;




   
   
    


})