// Get Withdraw Button
document.getElementById("withdraw-btn").addEventListener("click", function(){

    // Get Withdraw Field
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);

    // Get Balance Total 
    const balanceTotal = document.getElementById("balance");
    const previousBalanceString = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceString);

    // Clear Withdraw Field
    withdrawField.value = '';

    // Check Withdraw Amount if Number or String
    if (isNaN(newWithdrawAmount)){
        alert("Please enter a valid Number")
        return;
    }

    // Warnig for Withdraw Amount
    if (newWithdrawAmount > previousBalanceAmount){
        alert(`Gadha tor ato tk nai tui gorib, tor tk ace ${previousBalanceAmount}tk`);
        return;
    }

    // Get Withdraw Total
    const withdrawTotal = document.getElementById("withdraw");
    const previousWithdrawString = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);

    // Update Withdraw Total
    const currentWithdraw = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = currentWithdraw;

    // Reduce Balance Total after Withdraw
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
})