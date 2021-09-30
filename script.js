var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var btn = document.querySelector("#returnChange");
var errorSpan = document.querySelector(".error");
var result = document.querySelector(".result");

const notes = [2000, 500, 200, 100, 50, 20, 10 , 5, 1];


btn.addEventListener("click", function returnChange(){
    result.innerText = "";
    errorSpan.innerText = "";
    // console.log(billAmount.value,cashGiven.value);
    if(Number(cashGiven.value) > 0 && Number(billAmount.value) > 0 && Number(cashGiven.value) > Number(billAmount.value)){
        console.log(billAmount.value,cashGiven.value);
        errorSpan.innerText = "";
        var amountToReturn = cashGiven.value-billAmount.value;
        console.log(amountToReturn);

        notes.map(note => {
            document.getElementById(note).innerHTML = "0";
            var toReturn =  Math.floor(amountToReturn/note);
            if(toReturn >= 1){
                document.getElementById(note).innerHTML = toReturn;
                amountToReturn = amountToReturn%note;
            }
        })
    }

    else if(cashGiven.value.length != 0 && Number(cashGiven.value) === Number(billAmount.value)){
        result.innerText = "cash given is equal to  bill amount";
    }
    else{
        errorSpan.innerText = "cash given and bill amount must be > 0  and cash given should be > bill amount";
        notes.map(note => {
            document.getElementById(note).innerHTML = "0";
        });
        
    }
});

