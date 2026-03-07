

function convertTemperature() {

    let temperature = prompt("Enter the temperature:");
    let scale = prompt("Enter C for Celsius or F for Fahrenheit:");

    temperature = Number(temperature);

    if(scale === "C") {

        let fahrenheit = (temperature * 9/5) + 32;

        document.getElementById("result").innerHTML =
        temperature + "Celsius is " + fahrenheit.toFixed(2) + "Fahrenheit";

    }

    else if(scale === "F") {

        let celsius = (temperature - 32) * 5/9;

        document.getElementById("result").innerHTML =
        temperature + "Fahrenheit is " + celsius.toFixed(2) + "Celsius";

    }

    else{

        document.getElementById("result").innerHTML =
        "Please enter C or F.";

    }
}