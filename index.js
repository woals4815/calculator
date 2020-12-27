const button = document.querySelector('.number')
    numbers = button.querySelectorAll('button');
const cal_div = document.querySelector('.calculator')
    cals = cal_div.querySelectorAll('button');
const display = document.querySelector(".display");
let number="";
let previous_cal;

function paintNumber(){
    const num = number;
    display.innerHTML = number;
}

function handleClick(event){
    event.preventDefault();
    number = event.target.value + number;
    console.log(number);
    paintNumber();
}
function handleCal(event){
    number="";
    event.preventDefault();
    const cal = event.target.value;
    previous_cal = cal;
    console.log(previous_cal);
}

function init(){
    for(let i=0; i<numbers.length; i++){
        numbers[i].addEventListener("click", handleClick);
    }
    for(let i=0; i<cals.length; i++){
        cals[i].addEventListener("click", handleCal);
    }
}
init();