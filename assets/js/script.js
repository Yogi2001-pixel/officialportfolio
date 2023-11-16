// AOS Animation Code
AOS.init();

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// Email JS Code
let buttonValue = document.getElementById("button");
buttonValue.addEventListener("click", (event) => {
    event.preventDefault();

    // Get input field values
    const firstName = document.querySelector("#firstname").value.trim();
    const lastName = document.querySelector("#lastname").value.trim();
    const emailID = document.querySelector("#mailInput").value.trim();
    const mobileNumber = document.querySelector("#mobileNumber").value.trim();
    const message = document.querySelector("#messageInput").value.trim();

    // Check if any of the fields are empty
    if (firstName === "" || lastName === "" || emailID === "" || mobileNumber === "" || message === "") {
        Swal.fire("Form Fllling is Mandatory !");
    } else {
        const details = {
            first_name: firstName,
            last_name: lastName,
            email_id: emailID,
            mobile_number: mobileNumber,
            message: message,
        };

        emailjs.send("service_197qkbp", "template_bewxq2p", details).then(function (response) {
            Swal.fire({
                title: "Good job!",
                text: "Your Message has been sent successfully ",
                icon: "success"
            });
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error sending the email. Please try again later.',
            });
        });
    }
});  // Email JS Code Ends