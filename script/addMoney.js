document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("Amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;

    const totalBalance = document.getElementById("total-balance").innerText;

    const convertedBalance = parseFloat(totalBalance);
    if (amount) {
      if (pin === "1234") {
        const mainBalance = convertedAmount + convertedBalance;
        document.getElementById("total-balance").innerText = mainBalance;
      } else {
        alert("invalid pin");
      }
    } else {
      alert("enter amount");
    }
  });
