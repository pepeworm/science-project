const aboutSection = document.querySelector("#about");
const wave = document.querySelector("#about > img.wave");

function setAboutPadding() {
    aboutSection.style.paddingTop = `${(wave.offsetHeight) * (35 / 100)}px`;

    console.log(aboutSection.style.paddingTop, wave.offsetHeight);
}

window.addEventListener("resize", () => {
    setAboutPadding();
});

setAboutPadding();
