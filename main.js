var answerBox = document.getElementById("answer");
var button    = document.getElementById("calculatebutton");
var clearButton = document.getElementById("clearbutton");


var calculate = function () {

	var textBox1 = document.getElementById("textbox1");
	var textBox2 = document.getElementById("textbox2");

	var sum = Number(textBox1.value) * Number(textBox2.value);
	answerBox.innerHTML=sum;

}

 var clear  = function () {
            document.getElementById("textbox1").value = "";
            document.getElementById("textbox2").value = "";
            document.getElementById("answer").innerHTML = "";
            

        }


button.addEventListener("click", calculate);
clearButton.addEventListener("click", clear);



