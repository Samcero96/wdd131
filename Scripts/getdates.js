document.addEventListener("DOMContentLoaded", () => {
    // Insert the current year into the <span>
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Insert the page's last-modified date into the second <p>
    document.getElementById("lastModified").textContent =
        "Last Modification: " + document.lastModified;
});

