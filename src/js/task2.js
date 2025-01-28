const form = document.querySelector('.main__form');
const inputEmail = document.querySelector('.form__email');
const inputText = document.querySelector('.form__text');

inputEmail.value = localStorage.getItem("emailInput")
inputText.value = localStorage.getItem("textInput")
inputEmail.addEventListener("change", (e) => {
    localStorage.setItem("emailInput", e.target.value);
});

inputText.addEventListener("change", (e) => {
    localStorage.setItem("textInput", e.target.value);
})


