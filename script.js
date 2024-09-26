const emailForm = document.getElementById("email-form")
const successMessage = document.getElementById("success-message")
const remove = document.getElementById("remove")
const emailName = document.getElementById("email-data")
const dismissBtn = document.getElementById("dismiss-btn")

function emailValidation (email){
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // this is regular expression
    return regExp.test(email)
}

emailForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);    
        // getting the input value from the form it work to all input but since email is the only input that we trying to get the info from. 
    const data = Object.fromEntries(formData); 
        // getting/storing the input value from the form it work to all input. Since email is the only input that we trying to get the info from. 
        // This is much better for ex. If we have a lot of input we don't need to target each input with diff id. 
    const isEmailValid = emailValidation(data.email)
    if (isEmailValid) {
        remove.style.display = "none"
        successMessage.style.display = "block"
        emailName.textContent = email.value
        data.email = ""
        emailForm.reset()
    } else {
        console.log(error)
    }
})

dismissBtn.addEventListener("click", () => {
    remove.style.display = "flex"
    successMessage.style.display = "none"
})

// OLD VALIDATION CODE 
// emailForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     if (email.validity.valid) {
//         remove.style.display = "none"
//         // text.style.display = "none"
//         successMessage.style.display = "block"
//         emailName.textContent = email.value
//         email.value = ""
//     } else {
//         console.log("error")
//     }

// })





