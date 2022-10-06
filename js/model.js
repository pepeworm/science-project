const modelSection = document.querySelector("#symbol");
const wave = document.querySelector("#symbol > img.wave");

function setModelPadding() {
    modelSection.style.paddingTop = `${(wave.offsetHeight) * (35 / 100)}px`;

    console.log(modelSection.style.paddingTop, wave.offsetHeight);
}

window.addEventListener("resize", () => {
    setModelPadding();
});

setModelPadding();
