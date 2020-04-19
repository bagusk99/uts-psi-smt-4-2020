function count(param) {

  let operators = {
    '+': function (a, b) { return a+b },
    '-': function (a, b) { return a-b },
    '*': function (a, b) { return a*b },
    '/': function (a, b) { return a/b },
  }

  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let result = document.getElementById('result');

  result.value = operators[param](parseFloat(num1), parseFloat(num2));
}