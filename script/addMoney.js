// document
//   .getElementById("add-money")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const amount = document.getElementById("Amount").value;
//     const convertedAmount = parseFloat(amount);
//     const pin = document.getElementById("pin").value;

//     const totalBalance = document.getElementById("total-balance").innerText;

//     const convertedBalance = parseFloat(totalBalance);
//     if (amount) {
//       if (pin === "1234") {
//         const mainBalance = convertedAmount + convertedBalance;
//         document.getElementById("total-balance").innerText = mainBalance;
//       } else {
//         alert("invalid pin");
//       }
//     } else {
//       alert("enter amount");
//     }
//   })
document.getElementById('add-money').addEventListener('click',function(event)
{
  event.preventDefault();
  const AddedAmount=getInputValueById("Amount");
  const pin=getInputValueById("pin");
  const Convertedpin=pin.toString();
  const accountNo=document.getElementById('Account-number').value;

  const totalBalance=getInnerTextById("total-balance");
 

  if(AddedAmount)
  {
   if(accountNo.length===11)
   {
     if(Convertedpin.length>=4)
     {
       const sum=AddedAmount+totalBalance;
      //  document.getElementById("total-balance").innerText=sum;
      // function use korle
         setInnerTextByIdAndValue("total-balance",sum);
     }
     else
     {
      alert("Invalid pin")
     }
   }
   else
   {
    alert("Enter 11 digit account number");
   }
  }
  else
  {
    alert("Enter Amount");
  }
})

