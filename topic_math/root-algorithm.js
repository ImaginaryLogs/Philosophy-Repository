var display_num = 0;

function randomize() {
    display_num = randomIntBetween(32, 99)
    document.getElementById("num").innerHTML = Math.pow(display_num, 2) + " " + display_num;
}

function randomIntBetween(first, last) {
    return Math.floor(Math.random() * (Math.abs(last - first + 1))) + first;
}

function num_evaluate() {
    if (display_num == 0) { return alert("Press the random square button.") }
    var guess_num = parseInt(document.getElementById("num_guess").value);
    if (!(guess_num === parseInt(guess_num, 10))) { return alert("Valid input required"); }
    if (!(guess_num === display_num)) { return alert(guess_num + " is wrong. Try again."); }
    return alert("True")
}