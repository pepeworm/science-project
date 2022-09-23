const year = document.querySelector(".year");

year.innerText = (() => {
    const currentYear = new Date().getFullYear();

    return currentYear;
})();

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

const creditsBtn = document.querySelector(".links .btn:nth-child(2)");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector("span.close");

creditsBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

modalClose.addEventListener("click", () => {
    modal.classList.toggle("show");
});
