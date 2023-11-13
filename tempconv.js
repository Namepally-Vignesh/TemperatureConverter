// tempconv.js

document.addEventListener("DOMContentLoaded", function () {
  const celsiusInput = document.querySelector(".form-group:nth-child(2) input");
  const fahrenheitInput = document.querySelector(
    ".form-group:nth-child(3) input"
  );
  const clearButton = document.querySelector(".form-group:nth-child(4) button");

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  celsiusInput.addEventListener("input", function () {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
  });

  fahrenheitInput.addEventListener("input", function () {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
    celsiusInput.value = celsiusValue.toFixed(2);
  });

  clearButton.addEventListener("click", function () {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
  });
});
