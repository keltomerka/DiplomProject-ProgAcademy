//вітальня сторінка, реєстрація
const btnSing = document.getElementById("btn-sing")
const inputs = document.querySelectorAll(".welInp")
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
    // window.close("welcomePage.html")
    const userName = inputs[0].value;
    const email = inputs[1].value;
    const tel = inputs[2].value;
    const passwrd = inputs[3].value;
    console.log(userName, email, tel, passwrd);
})

 