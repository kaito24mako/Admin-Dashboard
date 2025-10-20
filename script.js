function getUserName() {
    let userName = prompt("What is your name?");
    document.querySelectorAll(".profile").forEach(profile => 
        profile.textContent = userName
    )
}
window.onload = getUserName;