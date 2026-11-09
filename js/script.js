
/* =================================
   1. SELECT ALL WEBSITE FORMS
================================= */

const allForms = document.querySelectorAll("form");


/* =================================
   2. MAKE IMPORTANT FIELDS REQUIRED
================================= */

const requiredFields = [
    "#attendance-name",
    "#service-type",
    "#attendance-date",

    "#event-title",
    "#event-category",
    "#event-date",

    "#feedback-category",
    "#feedback-message",

    "#member-name",
    "#member-email",
    "#member-phone",
    "#member-status",

    "#prayer-request"
];

requiredFields.forEach(function (field) {

    const input = document.querySelector(field);

    if (input) {
        input.required = true;
    }

});


/* =================================
   3. HANDLE FORM SUBMISSIONS
================================= */

allForms.forEach(function (form) {

    form.addEventListener("submit", function (event) {

        // Stop the page from refreshing
        event.preventDefault();


        // Identify the section containing the form
        const section = form.closest("section");

        const sectionName = section ? section.id : "";


        // Prepare a confirmation message
        const message = document.createElement("p");

        message.className = "form-message";

        message.setAttribute("role", "status");

        message.setAttribute("aria-live", "polite");


        // Different messages for different forms
        if (sectionName === "attendance") {

            message.textContent =
                "Attendance form validated. Database connection is still pending.";

        }

        else if (sectionName === "events") {

            message.textContent =
                "Event information received for this demonstration. Backend connection is pending.";

        }

        else if (sectionName === "feedback") {

            message.textContent =
                "Your feedback form has been validated. Secure submission will be enabled with the backend.";

        }

        else if (sectionName === "membership") {

            message.textContent =
                "Registration form validated. Membership approval will be handled by the backend.";

        }

        else if (sectionName === "prayer") {

            message.textContent =
                "Prayer request form validated. Secure storage is not yet connected.";

        }

        else {

            message.textContent =
                "Form validated successfully. Backend connection is pending.";

        }


        // Remove an earlier message if one exists
        const oldMessage = form.querySelector(".form-message");

        if (oldMessage) {
            oldMessage.remove();
        }


        // Display the new message
        form.appendChild(message);

    });

});


/* =================================
   4. WELCOME MESSAGE IN CONSOLE
================================= */

console.log(
    "Welcome to MIV Community 10 - Praise Redemptive Community 10!"
);


/* =================================
   5. CHECK JAVASCRIPT CONNECTION
================================= */

console.log("MIV Community 10 JavaScript is connected.");
