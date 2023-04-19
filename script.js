const calculatorButtons = document.querySelectorAll(".calculator-button");
const calculatorResult = document.querySelector(".calculator-result");
const symbols = ["*", "/", "%", "DEL", "C", "+", ",", ".", "="];

calculatorButtons.forEach((calculatorButton) => {
  calculatorButton.addEventListener("click", (e) => {
    calculatorResult.textContent += e.target.textContent;

    if (e.target.textContent === "C") {
      calculatorResult.textContent = "";
    } else if (e.target.textContent === "DEL") {
      calculatorResult.textContent = calculatorResult.textContent.substring(
        0,
        calculatorResult.textContent.length - 4
      );
    } else if (e.target.textContent === "=") {
      calculatorResult.textContent = calculatorResult.textContent.substring(
        0,
        calculatorResult.textContent.length - 1
      );
      calculatorResult.textContent = eval(calculatorResult.textContent);
    }

    symbols.forEach((symbol) => {
      if (calculatorResult.textContent.startsWith(symbol)) {
        calculatorResult.textContent = "";
      }
    });
  });
});
