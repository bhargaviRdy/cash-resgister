var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var btn = document.querySelector("#returnChange");
var errorSpan = document.querySelector(".error");

const notes = [2000, 500, 200, 100, 50, 20, 10 , 5, 1];


btn.addEventListener("click", function returnChange(){
    console.log(billAmount.value,cashGiven.value);
    if(cashGiven.value > 0 && billAmount.value > 0 && cashGiven.value >= billAmount.value){
        errorSpan.innerText = "";
        var amountToReturn = cashGiven.value-billAmount.value;

        notes.map(note => {
            var toReturn =  Math.floor(amountToReturn/note);
            if(toReturn >= 1){
                document.getElementById(note).innerHTML = toReturn;
                amountToReturn = amountToReturn%note;
            }
        })
    }
    else{
        errorSpan.innerText = "cash given and bill amount must be > 0  and cash given should be > bill amount"
    }
});

