const value = "€ 11.23";

//const currencySymbol = value.charAt(0);
//const number = value.slice(2);

// const splitValue = value.split(" ");
// const [currencySymbol, strNumber] = splitValue;

// const number = Number.parseFloat(strNumber);

// const symbolToCurrency: Record<string, string> = {
//   "€": "EUR",
//   $: "USD",
//   "£": "GBP",
// };

//console.log(symbolToCurrency);

function convertPrice(
  value: number,
  baseCurrency: string,
  targetCurrency: string
) {
  const baseRate = currencyRates[baseCurrency];
  const targetRate = currencyRates[targetCurrency];

  const rate = targetRate / baseRate;

  return value * rate;
}

console.log(convertPrice(1));
