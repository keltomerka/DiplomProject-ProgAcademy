const userName = localStorage.getItem("userName");
const email = localStorage.getItem("email");
const tel = localStorage.getItem("tel");
const passwrd = localStorage.getItem("passwrd");
const userInfo = document.getElementById("iconhead");
const modul = document.getElementById("user-modul")
const createStory = document.getElementById("createnewcard")
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
// відкрити модульне вікно для писання нові історії
const storyModul = document.getElementById("story-modul")
createStory.addEventListener("click", () => {
    mainName.value = "";
    dateInp.value = "";
    textArea.value = "";
    storyModul.style.display = "flex"
})
// закрити модульне вікно
const storyClose = document.getElementById("storyclose")
storyClose.addEventListener("click", () =>{
    const veryficat = confirm("Are you sure? Unsaved data will be deleted!")
    if(veryficat){
        storyModul.style.display = "none"
    }
})
// добавляти нові історії
const storiesContainer = document.getElementById("stor-con")
const mainName = document.getElementById("mainname")
const dateInp = document.getElementById("dateinp")
const textArea = document.getElementById("txtstory") 

// функція створення історій
const createCard = function(){
    const mainContainer = document.createElement("div")
    mainContainer.classList.add("stories")
    const storyhead = document.createElement("div")
    storyhead.classList.add("storyhead")
    const caption = document.createElement("h3")
    caption.textContent = mainName.value;
    const btns = document.createElement("div")
    //open btn
    const openBtn = document.createElement("button")
    openBtn.classList.add("btn");
    openBtn.classList.add("btn-outline-primary");
    const openIcon = document.createElement("i")
    openIcon.classList.add("fa-regular")
    openIcon.classList.add("fa-folder-open")
    const deleteBtn = document.createElement("button")
    //close btn
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-outline-danger");
    const deleteIcon = document.createElement("i")
    deleteIcon.classList.add("fa-solid")
    deleteIcon.classList.add("fa-trash-can")
    //txt
    const txtStory = document.createElement("p")
    txtStory.classList.add("txtabout")
    txtStory.textContent = textArea.value;
    const data = document.createElement("div")
    data.classList.add("data")

    data.innerHTML = dateInp.value
    const storyText = textArea.value;
    txtStory.textContent = storyText;

    openBtn.appendChild(openIcon)
    deleteBtn.appendChild(deleteIcon)
    btns.appendChild(openBtn)
    btns.appendChild(deleteBtn)
    storyhead.appendChild(caption)
    storyhead.appendChild(btns)
    mainContainer.appendChild(storyhead)
    mainContainer.appendChild(txtStory)
    mainContainer.appendChild(data)
    storiesContainer.appendChild(mainContainer)
    //видалити історію
    deleteBtn.addEventListener("click", () => {
        const sure = confirm("Are you sure? It will be delete forever")
        if(sure){storiesContainer.removeChild(mainContainer)}
          
    });
    //відкрити історію
    openBtn.addEventListener("click", () => {
        const moduleIcon = document.getElementById("text-modul-all")
        moduleIcon.style.display = "flex"
        const finishName = document.getElementById("finishname") 
        const finishDate = document.getElementById("finishdate") 
        const maintxt = document.getElementById("maintxt") 
        finishDate.textContent = `Date: ${dateInp.value}`
        finishName.textContent = `Caption: ${mainName.value}`
        maintxt.innerHTML = textArea.value
        // закрити історію
        const closeStory = document.getElementById("close")
        closeStory.addEventListener("click", () =>{
            moduleIcon.style.display = "none"
        })
        //відкрити редагування історії
        const edit = document.getElementById("edit")
        edit.addEventListener("click", () =>{
            moduleIcon.style.display = "none"
            storyModul.style.display = "flex"
            storyAdd.style.display = "none"
            const editBtn = document.createElement("button")
            editBtn.classList.add("btn")
            editBtn.classList.add("btn-outline-primary")
            editBtn.textContent = "Save"
            const storyModulBtns = document.querySelector(".story-modul-btns")
            storyModulBtns.appendChild(editBtn)
            editBtn.addEventListener("click", () =>{
                const newMainName = document.getElementById("mainname").value;
                const newDateInp = document.getElementById("dateinp").value;
                const newTextArea = document.getElementById("txtstory").value;
                const finishName = document.getElementById("finishname") 
                const finishDate = document.getElementById("finishdate") 
                const maintxt = document.getElementById("maintxt") 
                finishName.textContent = `Caption: ${newMainName}`
                finishDate.textContent = `Date: ${newDateInp}`
                maintxt.innerHTML = newTextArea
                storyModul.style.display = "none"
                moduleIcon.style.display = "flex"
            })
        })

    });
    const firstStory = storiesContainer.querySelector(".stories");
    storiesContainer.insertBefore(mainContainer, firstStory);
}
const storyAdd = document.getElementById("storyadd")
storyAdd.addEventListener("click", () =>{
    createCard()
    storyModul.style.display = "none"
})
// відкриття карточки повністю

 