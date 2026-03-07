

function convertTemp(){
  let temperature = prompt("Enter temperature in Celsius:");

  let fahrenheit = (temperature * 9 / 5) + 32;

  console.log("The conversion of Celsius " + temperature + "to Fahrenheit is " + fahrenheit + "°");

  document.getElementById("result").innerHTML =
    "The conversion of Celsius " + temperature + "to Fahrenheit is " + fahrenheit.toFixed(1) + "°";
}
