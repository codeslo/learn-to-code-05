var inputA = document.getElementById('inputA');
var inputB = document.getElementById('inputB');
var result = document.getElementById('result-box');
var calcBtn = document.getElementById('calculate');

calcBtn.addEventListener('click',addTotal);

function addTotal(){
    var a = parseInt(inputA.value);
    var b = parseInt(inputB.value);
    result.innerHTML = a+b;
}

