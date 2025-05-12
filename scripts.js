const output = document.querySelector("#output");
const submit = document.querySelector("#submit");
submit.addEventListener("click", getResult);
const option = document.querySelector("#option");
const container = document.querySelector("#container");
const break1 = document.createElement("br");
const answer = document.querySelector("#answer");
const drkmode = document.querySelector("#darkmode");
drkmode.addEventListener("click", darkmode);
var input;
var rax;
var ray;
var x1;
var y1;
var x2;
var y2;
var sqrt;
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
            sqrt2();
            break;
    }

    const submitbutton2 = document.createElement("button");
    submitbutton2.textContent = "Submit";

    container.appendChild(submitbutton2);
    submitbutton2.addEventListener("click", doMath);
}

function doMath() {
    input = option.value;
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
            distance();
            break;

        case "midpoint":
            midpoint();
            break;

        case "sqrt":
            sqrt3();
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
    x1 = document.querySelector("#x1")

    var x2label = document.createElement("label");
    x2label.textContent = "x2: ";
    var contx2 = document.createElement("input");
    contx2.setAttribute("id", "x2");
    contx2.type = "text";
    container.appendChild(x2label);
    container.appendChild(contx2);
    x2 = document.querySelector("#x2")

    var y1label = document.createElement("label");
    y1label.textContent = "y1: ";
    var conty1 = document.createElement("input");
    conty1.setAttribute("id", "y1");
    conty1.type = "text";
    container.appendChild(y1label);
    container.appendChild(conty1);
    y1 = document.querySelector("#y1");

    var y2label = document.createElement("label");
    y2label.textContent = "y2: ";
    var conty2 = document.createElement("input");
    conty2.setAttribute("id", "y2");
    conty2.type = "text";
    container.appendChild(y2label);
    container.appendChild(conty2);
    y2 = document.querySelector("#y2");
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

function sqrt2() {
    var sqrtlabel = document.createElement("label");
    sqrtlabel.textContent = "Number to square root: ";
    var contsqrt = document.createElement("input");
    contsqrt.setAttribute("id", "sqrt");
    contsqrt.type = "text";
    container.appendChild(sqrtlabel);
    container.appendChild(contsqrt);
    sqrt = document.querySelector("#sqrt")
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

function vector2() {
    var x3 = x1.value;
    x3 = parseInt(x3);
    var y3 = y1.value;
    y3 = parseInt(y3);
    var vx2 = vx.value;
    vx2 = parseInt(vx2);
    var vy2 = vy.value;
    vy2 = parseInt(vy2);
    var xans = x3 + vx2;
    var yans = y3 + vy2;
    answer.textContent = "Answer: (" + xans + "," + yans + ")";
}

function midpoint() {
    var x3 = x1.value;
    x3 = parseInt(x3);
    var y3 = y1.value;
    y3 = parseInt(y3);
    var x4 = x2.value;
    x4 = parseInt(x4);
    var y4 = y2.value;
    y4 = parseInt(y4);
    xans = (x3 + x4) / 2;
    yans = (y3 + y4) / 2;
    answer.textContent = "Answer: (" + xans + "," + yans + ")";
}

function distance() {
    var x3 = x1.value;
    x3 = parseInt(x3);
    var y3 = y1.value;
    y3 = parseInt(y3);
    var x4 = x2.value;
    x4 = parseInt(x4);
    var y4 = y2.value;
    y4 = parseInt(y4);
    var x5 = x3 - x4;
    x5 = x5 * x5;
    var y5 = y3 - y4;
    y5 = y5 * y5;
    var ans = y5 + x5;
    ans = Math.sqrt(ans);
    answer.textContent = "Answer: " + ans;

}

function sqrt3() {
    var sqrt4 = sqrt.value;
    sqrt4 = parseInt(sqrt4);
    var i = 1;
    var sqr = 1;
    var stop = sqrt4 / 2;
    var found = "false";
    while (sqr < stop) {
        i = i + 2;
        sqr = sqr + i;
        switch (sqrt4 % sqr) {
            case 0:
                var ans1 = sqrt4 / sqr;
                var ans2 = sqrt4 / ans1;
                var ans3 = Math.sqrt(ans2);
                answer.textContent = "Answer: " + ans2 + " , " + ans1 + " True answer: " + ans3 + "√" + ans1 ;
                found = "true";

                break;
        }
    }

    if (found === "false") {
        answer.textContent = "√" + sqrt4;
    }
}

function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
}