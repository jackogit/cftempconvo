var ctemp;


function calculateTotal() {
ctemp = document.getELementById("ctemp").value;


var ftemp = (ctemp * 1.8) +32;

document.getElementById("solution").innerHTML = ftemp;

}

document.getElementById("clickme").onclick = calculateTotal;