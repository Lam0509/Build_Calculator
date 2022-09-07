function calculate(result) {
    document.getElementById("inputNum").value = document.getElementById("inputNum").value + result
}

function calc() {
    if (document.getElementById("inputNum").value == "") {
        alert('Please enter numbers');
    } else {
        document.getElementById("inputNum").value = eval(document.getElementById("inputNum").value)
    }
}

