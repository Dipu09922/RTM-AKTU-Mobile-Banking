document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // const withdrawAmount=document.getElementById('cashout-Amount').value;
    // const ConvertedWithdrawAmount=parseFloat(withdrawAmount);

    // const totalBalance=document.getElementById('total-balance').innerText;
    // const ConvertedTotalBalance=parseFloat(totalBalance);

    // const pin1=document.getElementById('cashout-pin').value;
    const withdrawAmount = getInputValueById("cashout-Amount");

    const pin = getInputValueById("cashout-pin");
    const Convertedpin = pin.toString();

    const mainBalance = getInnerTextById("total-balance");
    
      const accountNo=document.getElementById('cashout-Account-number').value;
     
    if (accountNo.length===11) 
    {
      if (Convertedpin.length >= 4) 
        {
        if (withdrawAmount <= mainBalance) 
        {
          const sum = mainBalance - withdrawAmount;
          setInnerTextByIdAndValue("total-balance", sum);

          const container=document.getElementById("Transaction-container");

         const p= document.createElement("p");
         p.innerText=`
         cashout ${withdrawAmount} from this ${accountNo} account and your new balance is ${sum}
         `
         container.appendChild(p);

        } 
        else 
        {
          alert("vhi afnar account o oto takai nai");
        }
      } 
      else {
        alert("invalid pin");
      }
    } 
    else
    {
        alert("Enter 11 digit account number");
    }
  })
