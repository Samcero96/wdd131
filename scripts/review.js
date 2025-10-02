// Increment counter in localStorage
let count = parseInt(localStorage.getItem('reviewCount') || '0', 10);
count++;
localStorage.setItem('reviewCount', count);
document.getElementById('reviewCount').textContent = count;
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("currentyear").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent =
        "Last Modification: " + document.lastModified;
});
