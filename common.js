var input = document.getElementById("input");
var first;
var second;
var action;

//пока не знаю как это оптимизировать. пробовал через цикл, но не вышло
var one = document.getElementById("one");
one.addEventListener("click", function () {
   if(checkInput()) input.innerHTML += "1".toLocaleString() ;
});

var two = document.getElementById("two");
two.addEventListener("click", function () {
    if(checkInput()) input.innerHTML += "2";
});

var three = document.getElementById("three");
three.addEventListener("click", function () {
    if(checkInput()) input.innerHTML += "3";
});

var four = document.getElementById("four");
four.addEventListener("click", function () {
    if(checkInput()) input.innerHTML += "4";
});

var five = document.getElementById("five");
five.addEventListener("click", function () {
    if(checkInput()) input.innerHTML += "5";
});

var six = document.getElementById("six");
six.addEventListener("click", function () {
    if(checkInput()) input.innerHTML += "6";
});

var seven = document.getElementById("seven");
seven.addEventListener("click", function () {
    if(checkInput()) input.innerHTML += "7";
});
var eight = document.getElementById("eight");
eight.addEventListener("click", function () {
    if(checkInput()) input.innerHTML += "8";
});

var nine = document.getElementById("nine");
nine.addEventListener("click", function () {
    if(checkInput()) input.innerHTML += "9";
});

var zero = document.getElementById("zero");
zero.addEventListener("click", function () {
    if(checkInput()) input.innerHTML += "0";
});

function checkInput() {
    return input.innerHTML.length < 8;
}

function clearField() {
    input.innerHTML = "";
}
var clear = document.getElementById("clear");
clear.addEventListener("click", clearField);


var plus = document.getElementById("plus");
plus.addEventListener("click", function () {
    first = input.innerHTML;
    action = "+";
    clearField();
});

var minus = document.getElementById("minus");
minus.addEventListener("click", function () {
    first = input.innerHTML;
    action = "-";
    clearField();
});

var mult = document.getElementById("mult");
mult.addEventListener("click", function () {
    first = input.innerHTML;
    action = "*";
    clearField();
});

var div = document.getElementById("div");
div.addEventListener("click", function () {
    first = input.innerHTML;
    action = "/";
    clearField();
});

var is = document.getElementById("is");
is.addEventListener("click", calculate);

function calculate() {
    second = input.innerHTML;
    var act;
    switch (action) {
        case "+" : act = sum;
            break;
        case "-" : act = subs;
            break;
        case "*" : act = mul;
            break;
        case "/" : act = divide;
            break;
    }
    input.innerHTML = act(+first, +second).toLocaleString();
}

function sum(a,b) {
    return a + b;
}

function mul(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function subs(a,b) {
    return a-b;
}

