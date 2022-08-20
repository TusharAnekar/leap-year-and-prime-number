var checkLeapYear = document.querySelector("#btn-checkLY");
var inputLeapYear = document.querySelector('#inputNo');
var outputDiv = document.querySelector("#output");

checkLeapYear.addEventListener("click", clickHandler);

function LeapYear(yearOfBirth) {

    var result ="";

    if((yearOfBirth % 4 ===0 && yearOfBirth % 100 !=0)||(yearOfBirth % 400 === 0)) {
        result = "Your birth year is a leap year."
        return (result);
      }
      
      else{
        result ="Your birth year is not a leap year.";
        return(result);
      }
}

function clickHandler() {
    var inputLY = inputLeapYear.value;

    if (inputLY === "") {
      outputDiv.innerText = "Please enter value in the field."
    }
    else {
      outputDiv.innerText= LeapYear(inputLY);
    }
}