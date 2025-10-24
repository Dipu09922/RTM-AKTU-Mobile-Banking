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
   const SelectedBank=document.getElementById("allbank").value;

  

  if(AddedAmount<500)
  {
    alert("The amount is less than 500");
    return;
  }
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

         const container=document.getElementById("Transaction-container");

         const div=document.createElement("div");
         div.classList.add("bg-red-400");

         div.innerHTML=`
          <h1 class="text-yellow-300" >Added Money ${AddedAmount}</h1>
          <h3>From ${SelectedBank}</h3>
          <p>account number : ${accountNo}</p>
         `
         container.appendChild(div);
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

