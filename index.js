import {dogs} from "./data.js"
import {Profile} from "./profile.js"

// variables
const dogProfile = document.getElementById("dog")
const dogProfileText = document.getElementById("dog-description")
const likeBtn = document.getElementById("like-btn")
const rejectBtn = document.getElementById("reject-btn")
const like = document.getElementsByClassName("like")[0]
const reject = document.getElementsByClassName("nope")[0]
let i = 0

function renderHtml() {
    if (i < dogs.length) {
        let newProfile = new Profile(dogs[i])
        dogProfileText.innerHTML = newProfile.getProfileHtml()
        dogProfile.style.backgroundImage = `url(${newProfile.avatar}`
    }
    else {
        dogProfileText.innerHTML = "No more dog profiles 😢"
        dogProfileText.style.fontSize = "2rem"
        dogProfile.style.backgroundImage = `url(imagesHTML/sad-dog.jpg`
    }
}

likeBtn.addEventListener("click", function() {
    if (i < dogs.length) {
        btnActions()
        like.style.display = "inline-block";
    }
});

rejectBtn.addEventListener("click", function() {
    if (i < dogs.length) {
        btnActions()
        reject.style.display = "inline-block";
    }
});

function btnActions() {
    dogProfile.style.justifyContent = "space-between";
    likeBtn.disabled = true
    rejectBtn.disabled = true
    setTimeout(btnTime, 1500)
}

function btnTime() {
    i += 1
    like.style.display = "none";
    reject.style.display = "none";
    dogProfile.style.justifyContent = "flex-end";
    renderHtml()
    likeBtn.disabled = false
    rejectBtn.disabled = false
}

renderHtml()