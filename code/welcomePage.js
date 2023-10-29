const btnSing = document.getElementById("btn-sing")
btnSing.addEventListener("click", () => {
    const modal = document.getElementById("modal")
    modal.classList.add("displayFlex")
})
const btnClose = document.getElementById("btnClose")
btnClose.addEventListener("click", () => {
    modal.classList.remove("displayFlex")
})
const btnCreate = document.getElementById("btnCreate")
btnCreate.addEventListener("click", () => {
    window.open("mainPage.html")
    window.close("welcomePage.html")
})