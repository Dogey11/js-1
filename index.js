let HelloW = "Hello World!";

function yeet(hello) {
    if (hello) {
        document.getElementById("helloText").textContent = HelloW;
        console.log(HelloW);
    }
    else if (!hello) {
        document.getElementById("helloText").textContent = "yeet";
        console.log(HelloW);
    }
}

function textbox() {
    document.getElementById("joe").innerHTML = document.getElementById("textbox").value;
}

document.getElementById("clickMe").onclick = function() {
    yeet(true);
}

document.getElementById("fancypants").onclick = function() {
    yeet(false);
}

document.getElementById("rickroll").onclick = function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

document.getElementById("textbox").onkeyup = function() {
    textbox();
}