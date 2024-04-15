//variables for elements
var input = document.getElementById("input");
var output = document.getElementById("output");
var button = document.getElementById("button");

//event listener
button.addEventListener("click", convert);

//function
function convert() {
  var value = input.value;
  var conversion = ((value - 32) * 5) / 9;
  var conversionRound = conversion.toFixed(1);

  output.innerHTML = conversionRound;
  input.value = "";
  input.style.backgroundColor = "#26d978";
}
