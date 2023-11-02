const userName = localStorage.getItem("userName");
const email = localStorage.getItem("email");
const tel = localStorage.getItem("tel");
const passwrd = localStorage.getItem("passwrd");
const userInfo = document.getElementById("iconhead");
const modul = document.getElementById("user-modul")
userInfo.addEventListener("click", () =>{
    modul.style.display = "flex"
    const name = document.getElementById("name")
    const userEmail = document.getElementById("userEmail")
    const telnumber = document.getElementById("telnumber")
    name.innerHTML = `Your name: ${userName}`;
    userEmail.innerHTML = `Your email: ${email}`;
    telnumber.innerHTML = `Your phone number: ${tel}`;
})
const closeButton = document.getElementById("closebtn");
closeButton.addEventListener("click", () => {
    modul.style.display = "none";  
});