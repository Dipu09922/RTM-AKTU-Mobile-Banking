document.getElementById("login-btn").addEventListener("click", function(event) {
  event.preventDefault();
  const AccountNumber= document.getElementById('Account-number').value;
  
  const pi= document.getElementById('pin').value;
  const convertedPin=parseInt(pi);

  if(AccountNumber.length==11)
  {
    if(convertedPin===1234)
    {
      window.location.href="main.html";
    }
    else
    {
      alert("pin thik nai");
    }
  }
  else
  {
    console.log("type valid account number");
  }

}) 
