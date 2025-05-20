//JavaScript file
const output = document.querySelector("#output");
const submit = document.querySelector("#submit");
submit.addEventListener("click", getResult);
const option = document.querySelector("#option");
const container = document.querySelector("#container");
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
var c;
var a;
var b;
var ans;
var ans2;
var denom;
var checkbox2;
var y = 0;


function getResult() {
    var input = option.value;
    answer.textContent = "";

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

        case "pyththmhyp":
            pyththmhyp();
            break;

        case "pyththmleg":
            pyththmleg();
            break;

        case "isItTri":
            isItTri();
            break;

        case "quadratics":
            quadratics();
            break;

        case "SOHCAHTOA":
        SOHCAHTOA();
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
            sqrt3(sqrt.value);
            break;

        case "pyththmleg":
            pyththmleg2();
            break;

        case "pyththmhyp":
            pyththmhyp2();
            break;

        case "isItTri":
            isItTri2();
            break;

        case "quadratics":
            quadratics2();
            break;

        case "SOHCAHTOA":
            SOHCAHTOA2();
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
    raxlabel.textContent = "Rotate around x: ";
    var contrax = document.createElement("input");
    contrax.setAttribute("id", "rax");
    contrax.type = "text";
    container.appendChild(raxlabel);
    container.appendChild(contrax);
    rax = document.querySelector("#rax");

    var raylabel = document.createElement("label");
    raylabel.textContent = "Rotate around y: ";
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
    sqrtlabel.textContent = "Numerator(is assumed to be a squareroot) ex 5 will be √5: ";
    var contsqrt = document.createElement("input");
    contsqrt.setAttribute("id", "sqrt");
    contsqrt.type = "text";
    container.appendChild(sqrtlabel);
    container.appendChild(contsqrt);
    sqrt = document.querySelector("#sqrt");

    var vylabel = document.createElement("label");
    vylabel.textContent = "Denominator: ";
    var contvy = document.createElement("input");
    contvy.setAttribute("id", "denom");
    contvy.type = "text";
    container.appendChild(vylabel);
    container.appendChild(contvy);
    denom = document.querySelector("#denom");

    var vylabel = document.createElement("label");
    vylabel.textContent = "Is the number in the denominator a square root? ex: 5 in the denominator would become √5 ";
    var contvy = document.createElement("input");
    contvy.setAttribute("id", "checkbox");
    contvy.setAttribute("value", "sqrt")
    contvy.type = "checkbox";
    container.appendChild(vylabel);
    container.appendChild(contvy);
    checkbox2 = document.querySelector("#checkbox")
}

function rotate90() {
    var x3 = x1.value;
    x3 = parseFloat(x3);
    var y3 = y1.value;
    y3 = parseFloat(y3);
    var rax3 = rax.value;
    rax3 = parseFloat(rax3);
    var ray3 = ray.value;
    ray3 = parseFloat(ray3);
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
    x3 = parseFloat(x3);
    var y3 = y1.value;
    y3 = parseFloat(y3);
    var rax3 = rax.value;
    rax3 = parseFloat(rax3);
    var ray3 = ray.value;
    ray3 = parseFloat(ray3);
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
    x3 = parseFloat(x3);
    var y3 = y1.value;
    y3 = parseFloat(y3);
    var rax3 = rax.value;
    rax3 = parseFloat(rax3);
    var ray3 = ray.value;
    ray3 = parseFloat(ray3);
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
    x3 = parseFloat(x3);
    var y3 = y1.value;
    y3 = parseFloat(y3);
    var k2 = k.value;
    k2 = parseFloat(k2);
    var xans = x3 * k2;
    var yans = y3 * k2;
    answer.textContent = "Answer: (" + xans + "," + yans + ")";
}

function vector2() {
    var x3 = x1.value;
    x3 = parseFloat(x3);
    var y3 = y1.value;
    y3 = parseFloat(y3);
    var vx2 = vx.value;
    vx2 = parseFloat(vx2);
    var vy2 = vy.value;
    vy2 = parseFloat(vy2);
    var xans = x3 + vx2;
    var yans = y3 + vy2;
    answer.textContent = "Answer: (" + xans + "," + yans + ")";
}

function midpoint() {
    var x3 = x1.value;
    x3 = parseFloat(x3);
    var y3 = y1.value;
    y3 = parseFloat(y3);
    var x4 = x2.value;
    x4 = parseFloat(x4);
    var y4 = y2.value;
    y4 = parseFloat(y4);
    var xans = (x3 + x4) / 2;
    var yans = (y3 + y4) / 2;
    answer.textContent = "Answer: (" + xans + "," + yans + ")";
}

function distance() {
    var x3 = x1.value;
    x3 = parseFloat(x3);
    var y3 = y1.value;
    y3 = parseFloat(y3);
    var x4 = x2.value;
    x4 = parseFloat(x4);
    var y4 = y2.value;
    y4 = parseFloat(y4);
    var x5 = x3 - x4;
    x5 = x5 * x5;
    var y5 = y3 - y4;
    y5 = y5 * y5;
    var ans = y5 + x5;
    ans = Math.sqrt(ans);
    answer.textContent = "Answer: " + ans;

}

function sqrt3(sqrt4) {
    sqrt4 = parseFloat(sqrt4);
    var i = 1;
    var sqr = 1;
    var found = "false";
    var denom2 = denom.value;
    denom2 = parseFloat(denom2);
    if (checkbox2.checked) {
        sqrt4 = sqrt4 * denom2;
        while(sqr < sqrt4){
            i = i + 2;
            sqr = sqr + i;
            if (sqr === sqrt4) {
                answer.textContent = Math.sqrt(sqrt4)/ denom2;
                return Math.sqrt(sqrt4/ denom2);
            }
    
            
            switch (sqrt4 % sqr){
                case 0:
                    var ans1 = sqrt4 / sqr;
                    var ans2 = sqrt4 / ans1;
                    var ans3 = Math.sqrt(ans2);
                    var ans4 = ans3 + "√" + ans1;
                    answer.textContent = "Answer: " + ans2 + " , " + ans1 + '\n' + "True answer: " + ans3 + "√" + ans1 + "/" + denom2 + '\n' + "Estimated answer: " + Math.sqrt(sqrt4*denom2) / Math.sqrt(denom2);
                    found = "true";

                    break

            }
        }
        if (found === "false") {
            answer.textContent = "√" + sqrt4 + "/" + denom2 + '\n' + "Estimated answer: " + Math.sqrt(sqrt4) / Math.sqrt(denom2);
            return "No simplification";
        }
        return ans4;
    }
       

    console.log("No check");

    while (sqr < sqrt4) {
        i = i + 2;
        sqr = sqr + i;

        if (sqr === sqrt4) {
            answer.textContent = Math.sqrt(sqrt4)/denom2;
            return Math.sqrt(sqrt4/denom2);
        }

        switch (sqrt4 % sqr) {
            case 0:
                var ans1 = sqrt4 / sqr;
                var ans2 = sqrt4 / ans1;
                var ans3 = Math.sqrt(ans2);
                var ans4 = ans3 + "√" + ans1;
                answer.textContent = "Answer: " + ans2 + " , " + ans1 + '\n' + "True answer: " + ans3 + "√" + ans1 + "/ " + denom2 + '\n' + "Estimated answer: " + Math.sqrt(sqrt4) / denom2;
                found = "true";

                break;
        }
    }



    if (found === "false") {
        answer.textContent = "√" + sqrt4 + "/" + denom2 + '\n' + "Estimated answer: " + Math.sqrt(sqrt4) / denom2;
        return "No simplification";
    }
    return ans4;

}


function pyththmhyp() {
    var x1label = document.createElement("label");
    x1label.textContent = "a: ";
    var contx1 = document.createElement("input");
    contx1.setAttribute("id", "a");
    contx1.type = "text";
    container.appendChild(x1label);
    container.appendChild(contx1);
    a1 = document.querySelector("#a")

    var y1label = document.createElement("label");
    y1label.textContent = "b: ";
    var conty1 = document.createElement("input");
    conty1.setAttribute("id", "b");
    conty1.type = "text";
    container.appendChild(y1label);
    container.appendChild(conty1);
    b1 = document.querySelector("#b");

}

function pyththmleg() {
    var x1label = document.createElement("label");
    x1label.textContent = "a/b: ";
    var contx1 = document.createElement("input");
    contx1.setAttribute("id", "a");
    contx1.type = "text";
    container.appendChild(x1label);
    container.appendChild(contx1);
    a1 = document.querySelector("#a");

    var dialatelabel = document.createElement("label");
    dialatelabel.textContent = "c: "
    var contdialate = document.createElement("input");
    contdialate.setAttribute("id", "c");
    contdialate.type = "text";
    container.appendChild(dialatelabel);
    container.appendChild(contdialate);
    c1 = document.querySelector("#c");
}

function pyththmleg2() {
    var a3 = a1.value;
    a3 = parseFloat(a3);
    var c3 = c1.value;
    c3 = parseFloat(c3);
    c3 = c3 * c3;
    a3 = a3 * a3;
    ans = c3 - a3;
    ans2 = Math.sqrt(ans);
    answer.textContent = "Answer: " + ans2 + " , √" + ans;
    answer.textContent = answer.textContent + '\n' + sqrt3(ans);

}

function pyththmhyp2() {
    var a3 = a1.value;
    a3 = parseFloat(a3);
    var b3 = b1.value;
    b3 = parseFloat(b3);
    a3 = a3 * a3;
    b3 = b3 * b3;
    ab = a3 + b3;
    ans = Math.sqrt(ab);
    answer.textContent = "Answer: " + ans + " , √" + ab;
    answer.textContent = answer.textContent + '\n' + sqrt3(ab);
}

function isItTri() {
    var x1label = document.createElement("label");
    x1label.textContent = "a: ";
    var contx1 = document.createElement("input");
    contx1.setAttribute("id", "a");
    contx1.type = "text";
    container.appendChild(x1label);
    container.appendChild(contx1);
    a1 = document.querySelector("#a");

    var y1label = document.createElement("label");
    y1label.textContent = "b: ";
    var conty1 = document.createElement("input");
    conty1.setAttribute("id", "b");
    conty1.type = "text";
    container.appendChild(y1label);
    container.appendChild(conty1);
    b1 = document.querySelector("#b");


    var dialatelabel = document.createElement("label");
    dialatelabel.textContent = "c: "
    var contdialate = document.createElement("input");
    contdialate.setAttribute("id", "c");
    contdialate.type = "text";
    container.appendChild(dialatelabel);
    container.appendChild(contdialate);
    c1 = document.querySelector("#c");
}

function isItTri2() {
    var a3 = a1.value;
    a3 = parseFloat(a3);
    var b3 = b1.value;
    b3 = parseFloat(b3);
    var c3 = c1.value;
    c3 = parseFloat(c3);
    if (a3 + b3 > c3 && a3 + c3 > b3 && c3 + b3 > a3) {
        answer.textContent = "It is a triangle ";
        a2 = a3 * a3;
        b2 = b3 * b3;
        c2 = c3 * c3;
        if (a2 + b2 === c2) {
            answer.textContent = answer.textContent + "It is a right triangle"
        }
        if (a2 + b2 < c2) {
            answer.textContent = answer.textContent + "It is an obtuse triangle"
        }
        if (a2 + b2 > c2) {
            answer.textContent = answer.textContent + "It is an acute triangle"
        }
    }
    else {
        answer.textContent = "It is not a triangle ";
    }
}

function quadratics() {
    var x1label = document.createElement("label");
    x1label.textContent = "a: ";
    var contx1 = document.createElement("input");
    contx1.setAttribute("id", "a");
    contx1.type = "text";
    container.appendChild(x1label);
    container.appendChild(contx1);
    a1 = document.querySelector("#a");

    var y1label = document.createElement("label");
    y1label.textContent = "b: ";
    var conty1 = document.createElement("input");
    conty1.setAttribute("id", "b");
    conty1.type = "text";
    container.appendChild(y1label);
    container.appendChild(conty1);
    b1 = document.querySelector("#b");


    var dialatelabel = document.createElement("label");
    dialatelabel.textContent = "c: "
    var contdialate = document.createElement("input");
    contdialate.setAttribute("id", "c");
    contdialate.type = "text";
    container.appendChild(dialatelabel);
    container.appendChild(contdialate);
    c1 = document.querySelector("#c");
}

function quadratics2() {
    var a3 = a1.value;
    a3 = parseFloat(a3);
    var b3 = b1.value;
    b3 = parseFloat(b3);
    var c3 = c1.value;
    c3 = parseFloat(c3);

    var bsq = b3 * b3;
    console.log(bsq);
    var ac4 = -4 * a3 * c3;
    console.log(ac4);
    var a2 = 2 * a3;
    console.log(a2);
    var oppb = b3 * -1;
    console.log(oppb);
    var tobesqrt = bsq + ac4;
    if (tobesqrt < 0) {
        tobesqrt = tobesqrt * -1;
        sqrt10 = Math.sqrt(tobesqrt);
        sqrt10 = sqrt10 / a2;
        oppb = oppb / a2;
        answer.textContent = "Answer: " + oppb + " ±  " + sqrt10 + "i";
        return;
    }
    console.log(tobesqrt);
    var sqrt10 = Math.sqrt(tobesqrt);
    console.log(sqrt10);
    var ans1 = oppb + sqrt10;
    console.log(ans1);
    var ans2 = oppb - sqrt10;
    console.log(ans2);
    ans1 = ans1 / a2;
    ans2 = ans2 / a2;
    answer.textContent = "Answer: " + ans1 + " , " + ans2;
}

function SOHCAHTOA(){
    var x1label = document.createElement("label");
    x1label.textContent = "a: ";
    var contx1 = document.createElement("input");
    contx1.setAttribute("id", "a");
    contx1.type = "text";
    container.appendChild(x1label);
    container.appendChild(contx1);
    a1 = document.querySelector("#a");


    var dialatelabel = document.createElement("label");
    dialatelabel.textContent = "c: "
    var contdialate = document.createElement("input");
    contdialate.setAttribute("id", "c");
    contdialate.type = "text";
    container.appendChild(dialatelabel);
    container.appendChild(contdialate);
    c1 = document.querySelector("#c");

    var y1label = document.createElement("label");
    y1label.textContent = "ab: ";
    var conty1 = document.createElement("input");
    conty1.setAttribute("id", "ab");
    conty1.type = "text";
    container.appendChild(y1label);
    container.appendChild(conty1);
    ab1 = document.querySelector("#ab");



        var x1label = document.createElement("label");
    x1label.textContent = "bc: ";
    var contx1 = document.createElement("input");
    contx1.setAttribute("id", "bc");
    contx1.type = "text";
    container.appendChild(x1label);
    container.appendChild(contx1);
    bc1 = document.querySelector("#bc");


    var dialatelabel = document.createElement("label");
    dialatelabel.textContent = "ac: "
    var contdialate = document.createElement("input");
    contdialate.setAttribute("id", "ac");
    contdialate.type = "text";
    container.appendChild(dialatelabel);
    container.appendChild(contdialate);
    ac1 = document.querySelector("#ac");
}

function SOHCAHTOA2(){
    var a3 = a1.value;
    a3 = parseFloat(a3);
    var c3 = c1.value;
    c3 = parseFloat(c3);
    var bc3 = bc1.value;
    bc3 = parseFloat(bc3);
    var ab3 = ab1.value;
    ab3 = parseFloat(ab3);
    var ac3 = ac1.value;
    ac3 = parseFloat(ac3);

    if(a3!=0 && bc3!=0){
        ab3 = bc3 / tan(a3);
        ac3 = bc3 / cos(a3);
        b3 = 90;
        c3 = 180 - (a3+b3);
        answer.textContent = "<a = " + a3 + " <b = " + b3 + " <c = " + c3 + " ac = " + ac3 + " ab = " + ab3 + " bc = " + bc3;

    }

        if(c3!=0 && bc3!=0){
        ab3 = bc3 * tan(a3);
        ac3 = bc3 * cos(a3);
        b3 = 90;
        a3 = 180 - (c3+b3);
        answer.textContent = "<a = " + a3 + " <b = " + b3 + " <c = " + c3 + " ac = " + ac3 + " ab = " + ab3 + " bc = " + bc3;
        
    }
        if(a3!=0 && ac3!=0){
        bc3 = ac3 * sine(a3);
        ab3 = ac3 * cos(a3);
        b3 = 90;
        c3 = 180 - (a3+b3);
        answer.textContent = "<a = " + a3 + " <b = " + b3 + " <c = " + c3 + " ac = " + ac3 + " ab = " + ab3 + " bc = " + bc3;

    }

        if(c3!=0 && ac3!=0){
        ab3 = ac3 * sine(a3);
        bc3 = ac3 * cos(a3);
        b3 = 90;
        a3 = 180 - (c3+b3);
        answer.textContent = "<a = " + a3 + " <b = " + b3 + " <c = " + c3 + " ac = " + ac3 + " ab = " + ab3 + " bc = " + bc3;
        
    }
            if(a3!=0 && bc3!=0){
        ab3 = bc3 / tan(a3);
        ac3 = bc3 * sine(a3);
        b3 = 90;
        c3 = 180 - (a3+b3);
        answer.textContent = "<a = " + a3 + " <b = " + b3 + " <c = " + c3 + " ac = " + ac3 + " ab = " + ab3 + " bc = " + bc3;

    }

        if(c3!=0 && bc3!=0){
        ac3 = bc3 / sine(a3);
        ab3 = bc3 * tan(a3);
        b3 = 90;
        a3 = 180 - (c3+b3);
        answer.textContent = "<a = " + a3 + " <b = " + b3 + " <c = " + c3 + " ac = " + ac3 + " ab = " + ab3 + " bc = " + bc3;
        
    }
}

function tan(degrees){
    return Math.tan(degrees * Math.PI)/100;
}
function cos(degrees){
    return Math.cos(degrees * Math.PI)/100;
}
function sine(){
    return Math.sine(degrees * Math.PI)/100;
}
function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
}
