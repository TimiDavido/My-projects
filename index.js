

const PI = 3.1459;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("myinput").value
    radius = Number(radius)
    circumference = 2 * PI * radius;
    document.getElementById("myh1").textContent = circumference + "cm";
} 