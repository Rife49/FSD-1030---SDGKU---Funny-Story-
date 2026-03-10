function convertCtoF(){

    let temp = prompt("Enter Celsius temperature");

    let result = convertTemperature(temp,"C");

    document.getElementById("result").innerText =
        temp + "°C = " + result.toFixed(2) + "°F";

    updateThermometer(temp);
}


function convertFtoC(){

    let temp = prompt("Enter Fahrenheit temperature");

    let result = convertTemperature(temp,"F");

    document.getElementById("result").innerText =
        temp + "°F = " + result.toFixed(2) + "°C";

    updateThermometer(result);
}


function generateTable(){

    let body = document.getElementById("tableBody");

    body.innerHTML = "";

    for(let i = 0; i <= 100; i += 10){

        let f = (i * 9/5) + 32;

        body.innerHTML +=
        "<tr>" +
        "<td>" + i + "</td>" +
        "<td>" + f.toFixed(2) + "</td>" +
        "</tr>";
    }
}


function updateThermometer(temp){

    let fill = document.getElementById("fill");

    fill.style.height = temp * 2 + "px";

    if(temp <= 10){
        fill.style.backgroundColor = "blue";
    }
    else if(temp <= 25){
        fill.style.backgroundColor = "orange";
    }
    else{
        fill.style.backgroundColor = "red";
    }
}
