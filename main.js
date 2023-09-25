let elUserForm = document.querySelector(".user-form-js");
let elUserInput = document.querySelector(".user-input-js");
let elUserSelect = document.querySelector(".user-selection-js")
let elUserResult = document.querySelector(".user-output-js");


elUserForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let inputValue = +elUserInput.value;
    let inputSelect = +elUserSelect.value;
    let totalSum = inputValue / inputSelect;

    if(inputSelect == 12200) {
        elUserResult.textContent = "$" + totalSum.toFixed(2)
    } else if (inputSelect == 13000) {
        elUserResult.textContent = "€" + totalSum.toFixed(2)
    } else if (inputSelect == 127) {
        elUserResult.textContent = "₽" + totalSum.toFixed(2)
    }
});


