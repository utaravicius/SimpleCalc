var currentField = "";
var memory1 = "";
var action = "";
var result = "";
var history = new Array();
var historyItem = new Object();

function updateResultField(field) {
    document.getElementById('result').innerHTML = field;
}

function updateTable() {
   document.getElementById('secondTable') .innerHTML = history[history.length-1];
   console.log(history);
}

function handleClick(id) {
    if (id != 'division' && id != 'multiplication' && id != 'subtract' && id != 'plus') {
        if (id == 'dot') {
            currentField += ".";
        } else {
            currentField += id.valueOf();
            updateResultField(currentField);
        }
    } else {
        performAction(id);
    }
}

function performAction(id) {
    switch (id) {
        case 'division':
            action = "division"
            if (currentField != "") {
                memory1 = currentField;
            }
            currentField = "";
            updateResultField(currentField);
            console.log("Current status of action: " + action);

            break;
        case 'multiplication':
            action = "multiplication"
            if (currentField != "") {
                memory1 = currentField;
            }
            currentField = "";
            updateResultField(currentField);
            console.log("Current status of action: " + action);

            break;
        case 'subtract':
            action = "subtract"
            if (currentField != "") {
                memory1 = currentField;
            }
            currentField = "";
            updateResultField(currentField);
            console.log("Current status of action: " + action);

            break;
        case 'plus':
            action = "plus"
            if (currentField != "") {
                memory1 = currentField;
            }
            currentField = "";
            updateResultField(currentField);
            console.log("Current status of action: " + action);

            break;
        default:
            return;
    }
}

function calculate() {
    switch (action) {
        case 'division':
            result = Number(memory1) / Number(currentField);
            updateResultField(result);
            addToHistory(historyItem = {number1: memory1, historyAction: action, number2: currentField, equals: result});
            action = "";
            memory1 = "";
            currentField = result;
            break;
        case 'multiplication':
            result = Number(memory1) * Number(currentField);
            updateResultField(result);
            action = "";
            memory1 = "";
            currentField = result;
            break;
        case 'subtract':
            result = Number(memory1) - Number(currentField);
            updateResultField(result);
            action = "";
            memory1 = "";
            currentField = result;
            break;
        case 'plus':
            result = Number(memory1) + Number(currentField);
            updateResultField(result);
            action = "";
            memory1 = "";
            currentField = result;
            break;
        default:
            return;
    }
}

function addToHistory(item) {
    history.push(item);
    updateTable()
}

