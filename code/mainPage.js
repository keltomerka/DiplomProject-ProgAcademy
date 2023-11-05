const userName = localStorage.getItem("userName");
const email = localStorage.getItem("email");
const tel = localStorage.getItem("tel");
const passwrd = localStorage.getItem("passwrd");
const userInfo = document.getElementById("iconhead");
const modul = document.getElementById("user-modul")
const createStory = document.getElementById("createnewcard")
const edidModul = document.getElementById("edit-modul"); 
const moduleIcon = document.getElementById("text-modul-all")
const maintxt = document.getElementById("maintxt") 
// відкриття інфо про користувача
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
    // закрити історію
    const closeStory = document.getElementById("close")
    closeStory.addEventListener("click", () =>{
        moduleIcon.style.display = "none"
        // caption.innerHTML = finishName.textContent.split(": ")[1];
        // data.innerHTML = finishDate.textContent.split(": ")[1];
        // textArea.innerHTML = maintxt.value;
    })
    //відкрити історію
    const finishName = document.getElementById("finishname") 
    const finishDate = document.getElementById("finishdate")
    openBtn.addEventListener("click", () => {
        moduleIcon.style.display = "flex"
        finishDate.textContent = `Date: ${dateInp.value}`
        finishName.textContent = `Caption: ${mainName.value}`
        maintxt.innerHTML = textArea.value
    });
    //відкрити редагування історії
        // const editCaption = document.querySelector(".editcaption")
        // const editDate = document.querySelector(".editdate")
        // const editTxt = document.querySelector(".edittxt")
        // const edit = document.getElementById("edit")
        // edit.addEventListener("click", () =>{
        //     moduleIcon.style.display = "none"
        //     edidModul.style.display = "flex"
        // });
        
        //     const storySave = document.getElementById("storysave")
        //     storySave.addEventListener("click", () =>{
        //         finishName.textContent = `Caption: ${editCaption.value}`
        //         finishDate.textContent = `Date: ${editDate.value}`
        //         maintxt.innerHTML = editTxt.value
        //         edidModul.style.display = "none"
        //         moduleIcon.style.display = "flex"
        //     })
        //     const editClose = document.getElementById("editclose")
        //     editClose.addEventListener("click", () =>{
        //         const suhe = confirm("Are you sure? Unsaved data will be deleted!") 
        //         if(suhe){edidModul.style.display = "none"; moduleIcon.style.display = "flex"}
        //     })
    
    const firstStory = storiesContainer.querySelector(".stories");
    storiesContainer.insertBefore(mainContainer, firstStory);
}
const storyAdd = document.getElementById("storyadd")
storyAdd.addEventListener("click", () =>{
    createCard()
    storyModul.style.display = "none"
})
// 

 