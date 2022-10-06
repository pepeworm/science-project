const creditsBtn = document.querySelector(".links .btn:nth-child(2)");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector("span.close");

creditsBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

modalClose.addEventListener("click", () => {
    modal.classList.toggle("show");
});
