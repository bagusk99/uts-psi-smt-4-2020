function sum() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let result = document.getElementById('result');

  result.value = parseFloat(num1) + parseFloat(num2);
}

function subtract() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let result = document.getElementById('result');

  result.value = parseFloat(num1) - parseFloat(num2);
}

function multiple() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let result = document.getElementById('result');

  result.value = parseFloat(num1) * parseFloat(num2);
}

function divide() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let result = document.getElementById('result');

  result.value = parseFloat(num1) / parseFloat(num2);
}