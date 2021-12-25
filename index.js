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

document.getElementById("clickMe").onclick = function() {
    yeet(true);
}

document.getElementById("fancypants").onclick = function() {
    yeet(false);
}
