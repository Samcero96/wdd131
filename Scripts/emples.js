document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("currentyear").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent =
        "Last Modification: " + document.lastModified;
});


// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    // Toggle icon between ☰ and X
    hamburger.textContent = nav.classList.contains('show') ? '✖' : '☰';
});
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('main-nav').classList.toggle('show');
});


