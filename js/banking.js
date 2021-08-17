// function use 
function getInputValue (InputId){
    const InputFiled = document.getElementById(InputId);
    const InputText = InputFiled.value;
    const inputAmount = parseFloat(InputText);
    const inputTotalAmount = inputAmount;
    InputFiled.value = '';
    return inputTotalAmount;
}

function updateTotalFiled(totalFiledId,depototalAmount){
    const totalInput = document.getElementById(totalFiledId);
    const totalText = totalInput.innerText;
    const totalTextAmount = parseFloat(totalText);
    const TotalFinalAmount = depototalAmount + totalTextAmount;
    totalInput.innerText = TotalFinalAmount;
}



function UpdateTotalBalance (depototalAmount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balanceTextAmount = parseFloat(balanceText);
    balanceTotal.innerText = depototalAmount + balanceTextAmount;
    if(isAdd == true){
        balanceTotal.innerText = depototalAmount + balanceTextAmount;
    }
    else{
        balanceTotal.innerText =  balanceTextAmount - depototalAmount;
    }
}

document.getElementById('deposit-btn').addEventListener('click',function(){
    /* const depoInput = document.getElementById('deposit-input');
    const depoInputText = depoInput.value;
    const depoAmount = parseFloat(depoInputText);
    const depototalAmount = depoAmount; */
    const depototalAmount = getInputValue('deposit-input');
    // console.log(depototalAmount, clicked)

    //deposit and upadte
    /* const totalInput = document.getElementById('deposit-total');
    const totalText = totalInput.innerText;
    const totalTextAmount = parseFloat(totalText);
    const TotalFinalAmount = depototalAmount + totalTextAmount;
    totalInput.innerText = TotalFinalAmount; */
    updateTotalFiled('deposit-total',depototalAmount);
    
    //Balance update with deposit
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balanceTextAmount = parseFloat(balanceText);
    const FinalBalanceTotal = depototalAmount + balanceTextAmount;
    balanceTotal.innerText = FinalBalanceTotal; */
    UpdateTotalBalance (depototalAmount,true);

    /* //clear input filed
    depoInput.value = ''; */
});

//Withdraw balance
document.getElementById('withdraw-btn').addEventListener('click',function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText); */
    const withdrawFinal = getInputValue ('withdraw-input');

    //withdraw upadte 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawPrevious = withdrawTotal.innerText;
    // const withdrawPresent = parseFloat (withdrawPrevious);
    // const withdrawFinalTotal = withdrawPresent + withdrawFinal;
    // withdrawTotal.innerText = withdrawFinalTotal;
    updateTotalFiled('withdraw-total',withdrawFinal);

    //update balance withdraw balance
   /*  const BalanceTotal = document.getElementById('balance-total');
    const BalanceText = BalanceTotal.innerText;
    const BalancePrevios = parseFloat(BalanceText);
    const FinalBalance = BalancePrevios - withdrawFinal;
    BalanceTotal.innerText = FinalBalance; */
    UpdateTotalBalance (withdrawFinal,false);

    /* // clear withdraw input value
    withdrawInput.value = ''; */
});