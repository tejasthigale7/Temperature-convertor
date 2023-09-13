function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

function celsiusToKelvin(celsius) {
    var kelvin = celsius + 273.15;
    return kelvin;
}

function kelvinToCelsius(kelvin) {
    var celsius = kelvin - 273.15;
    return celsius;
}
function fahrenheitToKelvin(fahrenheit) {
    var kelvin = ((fahrenheit - 32) * 5 / 9) + 273.15;
    return kelvin;
}

function kelvinToFahrenheit(kelvin) {
    var fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
    return fahrenheit;
}

function convertTemperature() {
    var inputTemp = document.getElementById("temperatureIn").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var result = 0;

    if (inputUnit === "Celsius") {
        if(outputUnit === "Celsius")
            result=parseFloat(inputTemp)
        if (outputUnit === "Fahrenheit") {
            result = celsiusToFahrenheit(parseFloat(inputTemp));
        } else if (outputUnit === "Kelvin") {
            result = celsiusToKelvin(parseFloat(inputTemp));
        }
    } else if (inputUnit === "Fahrenheit") {
        if(outputUnit === "Fahrenheit")
            result=parseFloat(inputTemp)
        if (outputUnit === "Celsius") {
            result = fahrenheitToCelsius(parseFloat(inputTemp));
        } else if (outputUnit === "Kelvin") {
            result = fahrenheitToKelvin(parseFloat(inputTemp));
        }
    } else if (inputUnit === "Kelvin") {
        if(outputUnit === "Kelvin")
            result=parseFloat(inputTemp)
        if (outputUnit === "Celsius") {
            result = kelvinToCelsius(parseFloat(inputTemp));
        } else if (outputUnit === "Fahrenheit") {
            result = kelvinToFahrenheit(parseFloat(inputTemp));
        }
    }

    var output = "Result: " + inputTemp + " " + inputUnit + " = " + result + " " + outputUnit;

    var fresult = "The Temperature form " + inputUnit + " to " + outputUnit + " : " + result.toFixed(2) + " " + outputUnit;



    document.getElementById("result").textContent = output;

    document.getElementById("fresult").textContent = fresult;
}
