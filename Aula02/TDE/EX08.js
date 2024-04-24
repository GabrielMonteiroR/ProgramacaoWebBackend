function menorNumero(numberOne, numberTwo, numberThree) {
  let lower = numberOne;
  if (numberTwo < lower) {
    lower = numberTwo;
  }
  if (numberThree < lower) {
    lower = numberThree;
  }
  return lower;
}

console.log(menorNumero(12, 1, 1));
