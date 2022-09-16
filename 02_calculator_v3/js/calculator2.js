'use strict';

var wkFirst = "1"
var wkTotal = 0;
var wkInput = "";
var wkCalc = "+";
var wkBefore = "1";

const elementcalcLog = document.getElementById("calcLog");
const elementResult = document.getElementById("result");

const Num1 = document.getElementById("num1");
const Num2 = document.getElementById("num2");
const Num3 = document.getElementById("num3");
const Num4 = document.getElementById("num4");
const Num5 = document.getElementById("num5");
const Num6 = document.getElementById("num6");
const Num7 = document.getElementById("num7");
const Num8 = document.getElementById("num8");
const Num9 = document.getElementById("num9");
const Num0 = document.getElementById("num0");

const elementAdd = document.getElementById("add");
const elementSub = document.getElementById("sub");
const elementMult = document.getElementById("mult");
const elementDiv = document.getElementById("div");

const elementEquual = document.getElementById("equal");
const elementCancel = document.getElementById("cancel");


Num1.addEventListener("click",function(){edit(1)});
Num2.addEventListener("click",function(){edit(2)});
Num3.addEventListener("click",function(){edit(3)});
Num4.addEventListener("click",function(){edit(4)});
Num5.addEventListener("click",function(){edit(5)});
Num6.addEventListener("click",function(){edit(6)});
Num7.addEventListener("click",function(){edit(7)});
Num8.addEventListener("click",function(){edit(8)});
Num9.addEventListener("click",function(){edit(9)});
Num0.addEventListener("click",function(){edit(0)});

elementAdd.addEventListener("click",function(){update("+")});
elementSub.addEventListener("click",function(){update("-")});
elementMult.addEventListener("click",function(){update("*")});
elementDiv.addEventListener("click",function(){update("/")});

elementEquual.addEventListener("click",function(){dspResult()});
elementCancel.addEventListener("click",function(){clear()});

function edit(wkInput){
    if(wkBefore === "0"){
        elementResult.innerHTML = Number(elementResult.innerHTML + wkInput);
    }else{
        elementResult.innerHTML = wkInput;
    }
    wkFirst = "0";
    wkBefore = "0";
}

function update(calcType){
    if(wkBefore === "0"){
        elementcalcLog.innerHTML = elementcalcLog.innerHTML + Number(elementResult.innerHTML) + calcType;
        calculator();
    }else{
        if(wkFirst === "1"){
            elementcalcLog.innerHTML = "0" + calcType;
        }else{
            let wkLogLasWord = elementcalcLog.innerHTML.slice(-1);
            if(["+","-","×","÷"].innerHTML(wkLogLasWord)){
                elementcalcLog.innerHTML = elementcalcLog.innerHTML.slice(0,-1) + calcType;
            }
            else{
                elementcalcLog.innerHTML = elementcalcLog.innerHTML + calcType;
            }
        }
    }
    wkCalc = calcType;
    wkBefore = "1";
}

function dspResult(){
    if(wkFirst ==="0" && wkBefore ==="0"){
        elementcalcLog.innerHTML = elementcalcLog.innerHTML + Number(elementResult.innerHTML);
        calculator();
        wkCalc = "=";
        wkBefore = "1";
    }
}

function clear(){
    elementResult.innerHTML = 0;
    elementcalcLog.innerHTML = "";
    wkFirst = "1";
    wkTotal = 0;
    wkCalc = "+";
    wkBefore = "1";
}
function calculator(){
    switch(wkCalc){
        case "+":
            wkTotal = Number(wkTotal) + Number(elementResult.innerHTML);
            break;
        case "-":
            wkTotal = Number(wkTotal) - Number(elementResult.innerHTML);
            break;
        case "*":
            wkTotal = Number(wkTotal) * Number(elementResult.innerHTML);
             break;
        case "/":
            wkTotal = Number(wkTotal) / Number(elementResult.innerHTML);
            break;    
    }
    elementResult.innerHTML = wkTotal;
}
