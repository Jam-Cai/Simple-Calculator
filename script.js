function clearScreen() {
    let displayBox = document.getElementById("result");
    displayBox.value = "";
}

function display(value) {
    let displayBox = document.getElementById("result");
    displayBox.value += value;
}

function calculate() {
    let displayBox = document.getElementById("result");
    let answer = eval(displayBox.value);
    document.getElementById("result").value = answer;

}





