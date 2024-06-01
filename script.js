//declare all necessary elements
const num = document.getElementById("textbox");
const toPounds = document.getElementById("toPounds");
const toKgs = document.getElementById("toKg");
const result = document.getElementById("result");
let mass;

function convert() {

    mass = Number(num.value);

    if (toPounds.checked) {
        mass *= 2.205;
        result.textContent = mass.toFixed(1) + ` lbs`;
    }
    else if (toKgs.checked) {
        mass /= 2.205;
        result.textContent = mass.toFixed(1) + ` kg`;
    }
    else {
        result.textContent = `Please select a conversion.`;
    }
}