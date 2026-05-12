function biggerFont() {
    alert("Bigger is selected");
    document.getElementById("userInput").style.fontSize = "24pt";
}

function fancyShmancy() {


    if (document.getElementById("FancyShmancy").checked) {
        alert("FancyShmancy is selected");
        document.getElementById("userInput").style.fontWeight = "bold";
        document.getElementById("userInput").style.color = "blue";
        document.getElementById("userInput").style.textDecoration = "underline";
    }
    else if (document.getElementById("BoringBetty").checked) {
        alert("BoringBetty is selected");
        document.getElementById("userInput").style.fontWeight = "normal";
        document.getElementById("userInput").style.color = "black";
        document.getElementById("userInput").style.textDecoration = "none";
    }

}

function moo() {
    alert("Moo is selected");
    var str = document.getElementById("userInput").value;
    str = str.toUpperCase();
    var parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("userInput").value = str;
}