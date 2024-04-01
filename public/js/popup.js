const contctBtn = document.getElementById("contctBtn");
const workBtn = document.getElementById("workBtn");
const serviceBtn = document.getElementById("serviceBtn");

contctBtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("hello");
});

console.log("here");

function showWorkPopup() {
    let popup = document.getElementById("workPopup");
    showOrHide(popup);
}

function showServicePopup() {
    let popup = document.getElementById("servicePopup");
    showOrHide(popup);
}

function showContactPopup() {
    let popup = document.getElementById("contactPopup");
    showOrHide(popup);
}

function showFacebookPopup() {
    let popup = document.getElementById("facebookPopup");
    showOrHide(popup);
}

function showGithubPopup() {
    let popup = document.getElementById("githubPopup");
    showOrHide(popup);
}

function showPinterestPopup() {
    let popup = document.getElementById("pinterestPopup");
    showOrHide(popup);
}

function showOrHide(popup) {
    if (popup.style.display === "none") {
        popup.style.display = "block";
    }
    else {
        popup.style.display = "none";
    }
}