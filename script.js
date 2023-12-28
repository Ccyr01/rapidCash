document.addEventListener("DOMContentLoaded", function () {
    var servicesButton = document.getElementById("services-button");
    var servicesDropdown = document.getElementById("services-dropdown");

    servicesButton.addEventListener("click", function (event) {
        // Toggle the visibility of the dropdown menu
        servicesDropdown.style.display = (servicesDropdown.style.display === "block") ? "none" : "block";
        event.stopPropagation(); // Stop the click event from propagating to the document
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener("click", function (event) {
        if (!servicesDropdown.contains(event.target)) {
            servicesDropdown.style.display = "none";
        }
    });
});
