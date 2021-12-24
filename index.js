let hellow = "Hello World!";
function yeet() {
    console.log(hellow);
    document.getElementById("helloText").textContent = "yeet";
}
document.getElementById("clickMe").onclick = yeet;
