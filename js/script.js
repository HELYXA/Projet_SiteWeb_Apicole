const form = document.getElementById("contactForm");
const confirmationMessage = document.getElementById("confirmationMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    confirmationMessage.style.display = "block";

    form.reset();
});
