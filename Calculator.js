

// ops = [+, *, /];
// nums = []

var decimalUsed = false;
var equationAnswered = false;
var operatorUsed = false;

function numberInput(value){
    validateNumber(value);
}

function operatorInput(value) {
    validateOperator(value);
    equationAnswered=false;
    decimalUsed=false;
}



function minusInput(value) {
    validateMinus(value);
    equationAnswered=false;
    decimalUsed=false;
}


function validateNumber(value) {
    if (equationAnswered == true) {
        newEquation(true, value);
        }
    if(value != '.'){
        document.getElementById('actionBox').innerHTML += value;
    } else if(value ==='.') {
        if(!decimalUsed) {
            document.getElementById('actionBox').innerHTML += value;
            decimalUsed=true;
        }
    }
    operatorUsed=false;
}
function validateOperator(value) {
    var last1 = document.getElementById('actionBox').innerHTML.slice(-1);
    if (!operatorUsed && last1 != '-') {
        document.getElementById('actionBox').innerHTML += value;
        operatorUsed=true;
        } else {
        return false;
    }
}




    function validateMinus(value) {
        var last2 = document.getElementById('actionBox').innerHTML.slice(-2);
        if(last2 != '--'){
            document.getElementById('actionBox').innerHTML += value;
        }
        var last2 = document.getElementById('actionBox').innerHTML.slice(-2);
        if(last2 ==='--') {
            var twoNeg =  document.getElementById('actionBox').innerHTML.replace('--', '+');
            document.getElementById('actionBox').innerHTML = twoNeg;
            }
        }


function newEquation(equationAnswered, value){
    if (value <= 9) {
        clearActionBox();
        return value;
    }
}



function clearActionBox() {
    document.getElementById('actionBox').innerHTML = " ";
    decimalUsed=false;
    equationAnswered=false;
    operatorUsed=false;
}
function equals(){
    var last1 = document.getElementById('actionBox').innerHTML.slice(-1);
    if (!operatorUsed && last1 <=9){
        var equation = document.getElementById('actionBox').innerHTML;
        var answer = eval(equation);
        document.getElementById('actionBox').innerHTML = answer;
        console.log(equation);
        console.log(answer);
        decimalUsed=false;
        equationAnswered=true;
        operatorUsed=false;
    }
}
