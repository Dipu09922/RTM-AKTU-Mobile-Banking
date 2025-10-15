// by default obostay add money dekhabe
document.getElementById('addmoney').style.display="block";
document.getElementById('cashout').style.display="none";

document.getElementById('add-money-box').addEventListener('click',function()
{
    console.log("dipu");
    document.getElementById('addmoney').style.display="block";
    document.getElementById('cashout').style.display="none";
})
document.getElementById('cashout-box').addEventListener('click',function()
{
    document.getElementById('cashout').style.display="block";
    document.getElementById('addmoney').style.display="none";
})