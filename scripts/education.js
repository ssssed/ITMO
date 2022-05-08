const magistracyButton = document.querySelector("#magistracy");
const aspiranteButton = document.querySelector("#aspirante");
const aspiranteContent = document.querySelector(".education__img_absolute");
const buttonChangeEducation = document.querySelector(
    ".education__buttons-container"
);

function handleChangeEducation() {
    magistracyButton.classList.toggle("education__button_active");
    aspiranteButton.classList.toggle("education__button_active");
    handleImgVisible();
}

function handleImgVisible() {
    aspiranteContent.classList.toggle("education__img_visible");
}

buttonChangeEducation.addEventListener("click", handleChangeEducation);