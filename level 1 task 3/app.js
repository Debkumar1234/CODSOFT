let display = document.getElementById("display");

function appendNumber(num) {
    if (display.innerText === "0") {
        if (num == 0) {
            display.innerText= "0";
        } else {
            display.innerText = num;
        }
    }
    else {
        display.innerText += num;
    }
}
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
function clearScreen() {
    display.innerText="0";
}
function deleteLast() {
    if (display.innerText.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}
