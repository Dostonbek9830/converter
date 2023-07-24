// var elUserForm = document.getElementById(text);
// var elUserForm = document.getElementsByClassName(text);
// var elUserForm = document.getElementsByTagName(p);

//CREATING ELEMENTS AND STYLING 
// let elBtn = document.createElement("button"); VARIABLE CREATED NAMED elBtn 
// elBtn.textContent = "Send"; INSIDE OF THE elBtn PLACED TEXT 'Send'
// document.body.prepend("button") ADDES ELEMENT AT THE TOP OF THE BODY
// document.body.appendChild(elBtn); ELEMENT CREATES IN HTML BODY AS A CHILD 
// document.body.style.backgroundColor = "orange"; - CHANGE BACKGROUND COLOR OF THE BODY



// let elUserForm = document.querySelector(".js-user-form");
// let elUserInput = document.querySelector(".js-user-input");
// let elUserFormBtn = document.querySelector(".js-form-btn");
// let elUserCaption = document.querySelector(".js-form-caption");

// console.log(elUserForm, elUserFormBtn, elUserInput);

// elUserForm.addEventListener("submit", function(occur) {
//     occur.preventDefault();
//     var inputValue = elUserInput.value;
//     elUserCaption.textContent = inputValue;
//     console.log("Sent")
// })

var elUserForm = document.querySelector(".user-form-js");
var elUserInput = document.querySelector(".user-input.js");
// var elUserOption = document.querySelector(".user-selection-js");
var elUserBtn = document.querySelector(".user-btn-js");
var elUserResult = document.querySelector(".user-output-js");

// console.log(elUserForm, elUserInput, elUserOption, elUserBtn, elUserResult);

// var USD_CURRENCY = 11595;
// var EUR_CURRENCY = 12849;
// var RUB_CURRENCY = 128;

elUserForm.addEventListener("submit", function(occur){
    occur.preventDefault();
    let inputValue = elUserInput.value;
    elUserResult.textContent = inputValue;
    
})

