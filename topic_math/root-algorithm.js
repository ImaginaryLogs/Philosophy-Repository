
function randomize(){
    var display_num = Math.pow(Math.floor(Math.random() * 66) + 32, 2);
    document.getElementById("num").innerHTML = display_num;
}
