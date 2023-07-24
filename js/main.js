let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnResta = document.getElementById("btnResta");
let btnSuma = document.getElementById("btnSuma");
let btnDivide = document.getElementById("bbtnDividetn0");
let btnMultiplica = document.getElementById("btnMultiplica");
let btnPunto = document.getElementById("btnPunto");
let btnIgual = document.getElementById("btnIgual");

let txtResultado = document.getElementById("txtResultado");
let lblDatos = document.getElementById("lblDatos");

btnClear.addEventListener("click", function (event) {
  event.preventDefault();
  lblDatos.value = "";
});