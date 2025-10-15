document.getElementById('cashout-btn').addEventListener('click',function(event)
{
    event.preventDefault();
    const withdrawAmount=document.getElementById('Amount').value;
    const ConvertedWithdrawAmount=parseFloat(withdrawAmount);
    
    const totalBalance=document.getElementById('total-balance').innerText;
    const ConvertedTotalBalance=parseFloat(totalBalance);
    
    const pin1=document.getElementById('cashout-pin').value;

    if(pin1==='1234')
    {
        if(ConvertedWithdrawAmount<=ConvertedTotalBalance)
        {
           const MainBalance=ConvertedTotalBalance-ConvertedWithdrawAmount;
           console.log(MainBalance);
        }
        else
        {
            alert("vhi afnar account o oto takai nai");
        }
    }
    else
    {
        alert('invalid pin');
    }
   
})