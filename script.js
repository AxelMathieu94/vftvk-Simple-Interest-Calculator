function updateRate(){
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rate;
}

function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var finalyear = new Date().getFullYear()+parseInt(years);

    var interest = amount * years * rate / 100;
    
    document.getElementById("result").innerHTML = "If you deposit "+principal+", <br> at an interest rate of "+rate+". <br> You will receive an amount of "+(parseInt(amount)+interest)+" <br> in the year "+finalyear;
}
