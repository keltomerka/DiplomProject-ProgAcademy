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

// добавляти нові історії
const createStory = document.getElementById("createnewcard")
createStory.addEventListener("click", () => {
    createCard();
})
const storiesContainer = document.getElementById("stor-con")
const createCard = function(){
    const mainContainer = document.createElement("div")
    mainContainer.classList.add("stories")
    const storyhead = document.createElement("div")
    storyhead.classList.add("storyhead")
    const caption = document.createElement("h3")
    caption.textContent = "Story Title";
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("btn btn-outline-danger")
    const deleteIcon = document.createElement("i")
    deleteIcon.classList.add("fa-solid fa-trash-can")
    const txtStory = document.createElement("p")
    deleteBtn.appendChild(deleteIcon)
    storyhead.appendChild(caption)
    storyhead.appendChild(deleteBtn)
    mainContainer.appendChild(storyhead)
    mainContainer.appendChild(txtStory)
    storiesContainer.appendChild(mainContainer)
    deleteBtn.addEventListener("click", () => {
        storiesContainer.removeChild(mainContainer);  
    });
}
 