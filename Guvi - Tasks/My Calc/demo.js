    var calculatorContainer = document.createElement("div");
    calculatorContainer.className = "calculator";
    calculatorContainer.id = "calculator";
    var title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Calculator";
    document.body.appendChild(title);
    var description = document.createElement("p");
    description.id = "description";
    description.textContent = "Perform calculations using this calculator.";
    document.body.appendChild(description);
    var resultInput = document.createElement("input");
    resultInput.type = "text";
    resultInput.id = "result";
    calculatorContainer.appendChild(resultInput);
    var buttonValues = ["AC","1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", ".", "0", "=", "/"];
    for (var i = 0; i < buttonValues.length; i++) {
        var button = document.createElement("input");
        button.type = "button";
        button.className = "button"+[i];
        button.value = buttonValues[i];
        if (buttonValues[i] === "=") {
            button.onclick = calculateResult;
        }
        else if (buttonValues[i] === "AC") {
            
            button.onclick = clearResult;
        }
        else {
            button.onclick = appendToResult;
        }
        calculatorContainer.appendChild(button);
    }document.body.appendChild(calculatorContainer);
    function appendToResult() {
        var result = document.querySelector("#calculator input[type='text']");
        result.value += this.value;
    }
    function calculateResult() {
        var result = document.querySelector("#calculator input[type='text']");
        try {
            result.value = eval(result.value);
        }
        catch (error) {
            result.value = "Error";
        }
    }
    function clearResult() {
        var result = document.querySelector("#calculator input[type='text']");
        result.value = "";
    }