var checkPrimeNumber = document.querySelector("#btn-checkPN");
var inputPrimeNumber = document.querySelector("input");
var outputDiv = document.querySelector("#outputPN");

checkPrimeNumber.addEventListener("click", clickHandlerPN);

function primeNumber(dateOfBirth) {
    var temp = 0, flag=0, resultpPN = "";

    temp = dateOfBirth/2;

    for( var i=2;i<=temp; i++) {

        if(dateOfBirth%i === 0){
            resultpPN = "Your date of birth is not a prime number.";
            flag =1;
            break;
        }
    }

    if(flag === 0)
    {
        resultpPN = "Your date is prime number.";
    }
    return(resultpPN);
}


function clickHandlerPN() {
    var inputPN = inputPrimeNumber.value;
    outputDiv.innerText = primeNumber(inputPN);
}