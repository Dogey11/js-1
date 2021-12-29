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

// https://gist.github.com/DiegoSalazar/4075533
function valid_credit_card(value) {
      if (/[^0-9-\s]+/.test(value)) return false;

      let nCheck = 0, bEven = false;
      value = value.replace(/\D/g, "");
  
      for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
  
          if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
  
          nCheck += nDigit;
          bEven = !bEven;
      }
  
      return (nCheck % 10) == 0;
}

function textbox() {
    document.getElementById("joe").innerHTML = 
    valid_credit_card(document.getElementById("textbox").value);
}

document.getElementById("clickMe").onclick = function() {
    yeet(true);
}

document.getElementById("fancypants").onclick = function() {
    yeet(false);
}

document.getElementById("fancymcshamshy").onclick = function() {
    window.location.href = "https://dogey11.github.io/js-1/sus/";
}

document.getElementById("rickroll").onclick = function() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

document.getElementById("textbox").onkeyup = function() {
    textbox();
}
