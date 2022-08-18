// Get Desposit Button
document.getElementById("deposit-btn").addEventListener("click", function(){
    
    // Get Deposit Input Field
    const despositField = document.getElementById("deposit-field");
    const newDepositAmountString = despositField.value;
    // Convert Deposit value to Number;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Clear Deposit Field
    despositField.value = '';

    // Check if Number or String
    if (isNaN(newDepositAmount)){
        alert("Please enter valid number");
        return;
    }

    if (newDepositAmount < 1000){
        alert(`Apni borolok apnar $1000 er beshi Deposit korte hobe kintu apni deposit korcen $${newDepositAmount}`)
        return;
    }

    // Get Deposit Total
    const depositTotal = document.getElementById("deposit");
    const previousDepositString = depositTotal.innerText;
    // Convert Previous Deposit Value to Number
    const previousDepositAmount = parseFloat(previousDepositString);

    // Update Total Deposit
    const currentDeposit = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = currentDeposit;

    // Get Balance Total 
    const balanceTotal = document.getElementById("balance");
    const previousBalanceString = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    // Update Balance Total
    const currentBalance = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = currentBalance;


})