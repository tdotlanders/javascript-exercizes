const codeToSymbol = {
  EUR: "€",
  USD: "$",
  GBP: "£",
};

const symbolToCode = {};

for (const [code, symbol] of Object.entries(codeToSymbol)) {
  symbolToCode[symbol] = code;
}
console.log(symbolToCode);
