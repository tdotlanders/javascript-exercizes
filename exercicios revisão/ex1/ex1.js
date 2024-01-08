function getSign(x) {
  if (x > 0) {
    return "positivo";
  } else if (x < 0) {
    return "negativo";
  } else {
    return "zero";
  }
}

console.log(getSign(3));
