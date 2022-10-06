const year = document.querySelector(".year");

year.innerText = (() => {
    const currentYear = new Date().getFullYear();

    return currentYear;
})();
