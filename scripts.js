const output = document.querySelector("#output");
const submit = document.querySelector("#submit");
submit.addEventListener("click", getResult);
const option = document.querySelector("#option");
const container = document.querySelector("#container");
const break1 = document.createElement("br");
const answer = document.querySelector("#answer");
var input;
var rax;
var ray;
var x1;
var y1;
var k;

function getResult() {
    var input = option.value;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    switch (input) {
        case "rotate90":
            rotate();
            break;

        case "rotate180":
            rotate();
            break;

        case "rotate270":
            rotate();
            break;

        case "dialate":
            dialate();
            break;

        case "vector":
            vector();
            break;

        case "distance":
            midpointDistance();
            break;

        case "midpoint":
            midpointDistance();
            break;

        case "sqrt":
            sqrt();
            break;
    }

    const submitbutton2 = document.createElement("button");
    submitbutton2.textContent = "Submit";

    container.appendChild(submitbutton2);
    submitbutton2.addEventListener("click", doMath);
}

function doMath() {
    input = option.value;
    console.log(input)
    switch (input) {
        case "rotate90":
            rotate90();
            break;

        case "rotate180":
            rotate180();
            break;

        case "rotate270":
            rotate270();
            break;

        case "dialate":
            dialate2();
            break;

        case "vector":
            vector2();
            break;

        case "distance":
            midpoint();
            break;

        case "midpoint":
            distance();
            break;

        case "sqrt":
            sqrt2();
            break;
    }
}

function midpointDistance() {

    var x1label = document.createElement("label");
    x1label.textContent = "x1: ";
    var contx1 = document.createElement("input");
    contx1.setAttribute("id", "x1");
    contx1.type = "text";
    container.appendChild(x1label);
    container.appendChild(contx1);
    var x1 = document.querySelector("#x1")

    var x2label = document.createElement("label");
    x2label.textContent = "x2: ";
    var contx2 = document.createElement("input");
    contx2.setAttribute("id", "x2");
    contx2.type = "text";
    container.appendChild(x2label);
    container.appendChild(contx2);
    var x2 = document.querySelector("#x2")

    var y1label = document.createElement("label");
    y1label.textContent = "y1: ";
    var conty1 = document.createElement("input");
    conty1.setAttribute("id", "y1");
    conty1.type = "text";
    container.appendChild(y1label);
    container.appendChild(conty1);
    var y1 = document.querySelector("#y1");

    var y2label = document.createElement("label");
    y2label.textContent = "y2: ";
    var conty2 = document.createElement("input");
    conty2.setAttribute("id", "y2");
    conty2.type = "text";
    container.appendChild(y2label);
    container.appendChild(conty2);
    var y2 = document.querySelector("#y2");
}

function rotate() {
    var x1label = document.createElement("label");
    x1label.textContent = "x1: ";
    var contx1 = document.createElement("input");
    contx1.setAttribute("id", "x1");
    contx1.type = "text";
    container.appendChild(x1label);
    container.appendChild(contx1);
    x1 = document.querySelector("#x1")

    var y1label = document.createElement("label");
    y1label.textContent = "y1: ";
    var conty1 = document.createElement("input");
    conty1.setAttribute("id", "y1");
    conty1.type = "text";
    container.appendChild(y1label);
    container.appendChild(conty1);
    y1 = document.querySelector("#y1");

    var raxlabel = document.createElement("label");
    raxlabel.textContent = "Roate around x: ";
    var contrax = document.createElement("input");
    contrax.setAttribute("id", "rax");
    contrax.type = "text";
    container.appendChild(raxlabel);
    container.appendChild(contrax);
    rax = document.querySelector("#rax");

    var raylabel = document.createElement("label");
    raylabel.textContent = "Roate around y: ";
    var contray = document.createElement("input");
    contray.setAttribute("id", "ray");
    contray.type = "text";
    container.appendChild(raylabel);
    container.appendChild(contray);
    ray = document.querySelector("#ray");
}


function dialate() {
    var x1label = document.createElement("label");
    x1label.textContent = "x1: ";
    var contx1 = document.createElement("input");
    contx1.setAttribute("id", "x1");
    contx1.type = "text";
    container.appendChild(x1label);
    container.appendChild(contx1);
    x1 = document.querySelector("#x1")

    var y1label = document.createElement("label");
    y1label.textContent = "y1: ";
    var conty1 = document.createElement("input");
    conty1.setAttribute("id", "y1");
    conty1.type = "text";
    container.appendChild(y1label);
    container.appendChild(conty1);
    y1 = document.querySelector("#y1");

    var dialatelabel = document.createElement("label");
    dialatelabel.textContent = "k: "
    var contdialate = document.createElement("input");
    contdialate.setAttribute("id", "k");
    contdialate.type = "text";
    container.appendChild(dialatelabel);
    container.appendChild(contdialate);
    k = document.querySelector("#k");
}

function vector() {
    var x1label = document.createElement("label");
    x1label.textContent = "x1: ";
    var contx1 = document.createElement("input");
    contx1.setAttribute("id", "x1");
    contx1.type = "text";
    container.appendChild(x1label);
    container.appendChild(contx1);
    x1 = document.querySelector("#x1")

    var y1label = document.createElement("label");
    y1label.textContent = "y1: ";
    var conty1 = document.createElement("input");
    conty1.setAttribute("id", "y1");
    conty1.type = "text";
    container.appendChild(y1label);
    container.appendChild(conty1);
    y1 = document.querySelector("#y1");

    var vxlabel = document.createElement("label");
    vxlabel.textContent = "Vector x: ";
    var contvx = document.createElement("input");
    contvx.setAttribute("id", "vx");
    contvx.type = "text";
    container.appendChild(vxlabel);
    container.appendChild(contvx);
    vx = document.querySelector("#vx");

    var vylabel = document.createElement("label");
    vylabel.textContent = "Vector y: ";
    var contvy = document.createElement("input");
    contvy.setAttribute("id", "vy");
    contvy.type = "text";
    container.appendChild(vylabel);
    container.appendChild(contvy);
    vy = document.querySelector("#vy");
}

function sqrt() {
    var sqrtlabel = document.createElement("label");
    sqrtlabel.textContent = "Number to square root: ";
    var contsqrt = document.createElement("input");
    contsqrt.setAttribute("id", "sqrt");
    contsqrt.type = "text";
    container.appendChild(sqrtlabel);
    container.appendChild(contsqrt);
    var sqrt = document.querySelector("#sqrt")
}

function rotate90() {
    var x3 = x1.value;
    x3 = parseInt(x3);
    var y3 = y1.value;
    y3 = parseInt(y3);
    var rax3 = rax.value;
    rax3 = parseInt(rax3);
    var ray3 = ray.value;
    ray3 = parseInt(ray3);
    var rax2 = -rax3;
    var ray2 = -ray3;
    x3 = x3 + rax2;
    y3 = y3 + ray2;
    var y2 = -x3;
    var x2 = y3;
    var xans = x2 + rax3;
    var yans = y2 + ray3;
    answer.textContent = "Answer: (" + xans + "," + yans + ")";
}

function rotate180() {
    var x3 = x1.value;
    x3 = parseInt(x3);
    var y3 = y1.value;
    y3 = parseInt(y3);
    var rax3 = rax.value;
    rax3 = parseInt(rax3);
    var ray3 = ray.value;
    ray3 = parseInt(ray3);
    var rax2 = -rax3;
    var ray2 = -ray3;
    x3 = x3 + rax2;
    y3 = y3 + ray2;
    var y2 = -x3;
    var x2 = -y3;
    var xans = x2 + rax3;
    var yans = y2 + ray3;
    answer.textContent = "Answer: (" + xans + "," + yans + ")";
}

function rotate270() {
    var x3 = x1.value;
    x3 = parseInt(x3);
    var y3 = y1.value;
    y3 = parseInt(y3);
    var rax3 = rax.value;
    rax3 = parseInt(rax3);
    var ray3 = ray.value;
    ray3 = parseInt(ray3);
    var rax2 = -rax3;
    var ray2 = -ray3;
    x3 = x3 + rax2;
    y3 = y3 + ray2;
    var y2 = x3;
    var x2 = -y3;
    var xans = x2 + rax3;
    var yans = y2 + ray3;
    answer.textContent = "Answer: (" + xans + "," + yans + ")";
}

function dialate2() {
    var x3 = x1.value;
    x3 = parseInt(x3);
    var y3 = y1.value;
    y3 = parseInt(y3);
    var k2 = k.value;
    k2 = parseInt(k2);
    var xans = x3 * k2;
    var yans = y3 * k2;
    answer.textContent = "Answer: (" + xans + "," + yans + ")";
}
