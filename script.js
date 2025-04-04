document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000); // Message disappears after 3 seconds
});
