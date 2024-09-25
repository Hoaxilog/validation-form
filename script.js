const emailForm = document.getElementById("email-form")
const successMessage = document.getElementById("success-message")
const remove = document.getElementById("remove")
const email = document.getElementById("email")
const emailName = document.getElementById("email-data")
const dismissBtn = document.getElementById("dismiss-btn")

emailForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (email.validity.valid) {
        remove.style.display = "none"
        // text.style.display = "none"
        successMessage.style.display = "block"
        emailName.textContent = email.value
        email.value = ""
    } else {
        console.log("error")
    }

})

dismissBtn.addEventListener("click", () => {

    remove.style.display = "flex"

    successMessage.style.display = "none"
    
})



