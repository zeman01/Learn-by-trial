
// ! Function to convert celsius to fehrenheit
function celsiusToFehrenheit(celsius) {
  let temp = (celsius * 9) / 5 + 32;
  console.log(temp);
}


// ! Function to convert fehrenheit to celsius

function fehrenheitToCelsius(fehrenheit) {
  let temp = ((fehrenheit - 32) * 5) / 9;
  console.log(temp);
}

// call function celsiusToFehrenheit
celsiusToFehrenheit(-5);
// call functiom fehrenheitToCelsius
fehrenheitToCelsius(86);
