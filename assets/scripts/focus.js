/* focus */

const focus = document.getElementById("focus");
const focusOutput = document.getElementById("textFocusOutput");

focus.addEventListener("keypress", function (e){
    if(e.key === "Enter") {
        let focus = document.getElementById("focus");
        let inputFocus = focus.value;
        if (inputFocus.length <= 0){
            focusError.innerHTML = "please enter focus";
            return;
        }
        document.querySelector('.mainFocus').classList.remove('hide');
        document.querySelector('.myFocus').classList.add('hide');
        focusOutput.innerHTML = focus.value;
        localStorage.setItem('focus', focus.value);
    }
})

$('#focusCheck').on('change', function () {
    let doneFocus = $(this).is(':checked');
    localStorage.setItem('focusCheck', JSON.stringify(doneFocus));
  })

const encouragingW = document.getElementById("words");

const ewords = ["Nice.",
                "Way to go!",
                "Good job!", 
                "Great work!"];

//checkbox

checkbox = document.getElementById("focusCheck");
const ewDiv = document.querySelector(".encouragingWords");

checkbox.addEventListener("change", e => {

    if(e.target.checked){
        const randomWords = ewords[(Math.floor(Math.random() * ewords.length))];
        encouragingW.innerHTML = randomWords;
        textFocusOutput.style.textDecoration="line-through";
        e.target.parentElement.style.opacity = 1;

        ewDiv.classList.remove('hide');
        setTimeout(function() {ewDiv.style.opacity = 1}, 0);
        setTimeout(function() {ewDiv.style.opacity = 0}, 1300);
    } else {
        e.target.parentElement.style.opacity = null;
        textFocusOutput.style.textDecoration = "none";
    }
})

if(checkbox.checked) {
    checkbox.parentElement.style.opacity = 1;
}


//focus popup options
const focusButton = document.querySelector("#dotsFocusButton");
const focusPopup = document.querySelector("#focusPopupContainer");

focusButton.addEventListener("click", e => {
    if(focusPopup.style.opacity == 0){
        focusPopup.classList.toggle("hide");
        focusButton.style.opacity = 1;
        setTimeout(function() {focusPopup.style.opacity = 1}, 0);
    } else{
        focusButton.style.opacity = null;
        focusPopup.style.opacity = 0;
        setTimeout(function() {focusPopup.classList.toggle("hide")}, 150);
    }
});