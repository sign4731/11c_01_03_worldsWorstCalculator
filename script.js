window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
  console.log("setting up");

  document.querySelector("#calculate").addEventListener("click", calc);
}

let calculate;
function calc() {
  console.log("calculate");
  let val1 = parseFloat(document.querySelector("#firstnumber").value);
  let val2 = parseFloat(document.querySelector("#secondnumber").value);
  let operator = document.querySelector("#operator").value;

  if (operator == "add") {
    calculate = val1 + val2;
  } else if (operator == "sub") {
    calculate = val1 - val2;
  } else if (operator == "mul") {
    calculate = val1 * val2;
  } else if (operator == "div") {
    calculate = val1 / val2;
  }
  console.log(calculate);

  showResult();
}

let result = document.querySelector("li");

function showResult() {
  console.log("show results");
  let num = calculate;
  let n;
  let option = document.querySelector("#decimals").value;

  if (option == "0") {
    n = num.toFixed(0);
    console.log(n);
  } else if (option == "1") {
    n = num.toFixed(1);
  } else if (option == "2") {
    n = num.toFixed(2);
  } else if (option == "3") {
    n = num.toFixed(3);
  } else if (option == "4") {
    n = num.toFixed(4);
  } else if (option == "5") {
    n = num.toFixed(5);
  } else if (option == "6") {
    n = num.toFixed(6);
  } else if (option == "7") {
    n = num.toFixed(7);
  } else if (option == "8") {
    n = num.toFixed(8);
  }

  let node = document.createElement("LI");
  let textnode = document.createTextNode(n);
  node.appendChild(textnode);

  let list = document.getElementById("results");
  list.insertBefore(node, list.childNodes[0]);

  document.querySelector("#clear").addEventListener("click", clearResults);
}

function clearResults() {
  console.log("clear results");

  document.getElementById("results").innerHTML = "0";
}
