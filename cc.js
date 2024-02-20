function appendtodisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function convertCurrency() {
  let amount = parseFloat(document.getElementById("display").value);
  let fromcurrency = document.getElementById("fromCurrency").value;
  let tocurrency = document.getElementById("toCurrency").value;

  let conversionRate = {
    USD: { EUR: 0.85, GBP: 0.72, INR: 82.92, KRW: 1333.03, CAD: 1.35 },
    EUR: { USD: 1.18, GBP: 0.85, INR: 89.59, KRW: 1440.15, CAD: 1.46 },
    GBP: { USD: 1.39, EUR: 1.17, INR: 104.51, KRW: 1680.42, CAD: 1.70 },
    INR: { EUR: 0.011, GBP: 0.0096, KRW: 16.07, CAD: 0.016, USD: 0.012 },
    KRW: { EUR: 0.00069, GBP: 0.00059, INR: 0.062, CAD: 0.0010, USD: 0.00075 },
    CAD: { EUR: 0.69, GBP: 0.59, INR: 61.53, KRW: 989.37, USD: 0.74 }
  };
  if (isNaN(amount)) {
    alert("please enter the valid value");
    return;
  }
  if (!conversionRate[fromcurrency] || !conversionRate[fromcurrency][tocurrency]) {
    alert('conversion not supported');
    return;
  }
  let conversionAmount = amount * conversionRate[fromcurrency][tocurrency];
  document.getElementById("result").value = conversionAmount;
}