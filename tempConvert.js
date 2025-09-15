function celsiusToFehrenheit(celsius) {
  let temp = (celsius * 9) / 5 + 32;
  console.log(temp);
}

function fehrenheitToCelsius(fehrenheit) {
  let temp = ((fehrenheit - 32) * 5) / 9;
  console.log(temp);
}
celsiusToFehrenheit(-5);
fehrenheitToCelsius(86);
