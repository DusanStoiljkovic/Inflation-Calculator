function calculate() {
    const rate = document.getElementsByName("rate")[0].value;
    const amount = document.getElementsByName("amount")[0].value;
    const years = document.getElementsByName("years")[0].value;

    const finalAmount = amount * Math.pow((1 + rate / 100), years);

    const outputElement = document.getElementsByClassName("result")[0];

    outputElement.innerHTML = `<h2> Result: $${finalAmount.toFixed(2)} </h2>`;
}