document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("currentyear").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent =
        "Last Modification: " + document.lastModified;
});

// Display current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Recipes array (object + array + template literals)
const recipes = [
    { name: "Jollof Rice", time: 60 },
    { name: "Egusi Soup", time: 45 }
];

// Function: show recipes dynamically
function showRecipes() {
    const container = document.getElementById("recipeList");
    if (!container) return;

    container.innerHTML = recipes.map(r =>
        `<p><strong>${r.name}</strong> takes ${r.time} minutes to cook.</p>`
    ).join("");
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".recipe").forEach(recipe => {
        const btn = document.createElement("button");
        btn.textContent = "Toggle Directions";
        btn.style.marginTop = "1rem";
        btn.classList.add("cta-btn");

        const directions = recipe.querySelector("ol");
        btn.addEventListener("click", () => {
            directions.style.display = directions.style.display === "none" ? "block" : "none";
        });

        recipe.appendChild(btn);
    });

    // Dynamic year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
});

// Event listener for recipe button
const recipeBtn = document.getElementById("loadRecipes");
if (recipeBtn) {
    recipeBtn.addEventListener("click", showRecipes);
}

// Contact form handling with conditional + localStorage
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();
        const dish = document.getElementById("dish").value;
        if (dish) {
            localStorage.setItem("favoriteDish", dish);
            alert(`Your favorite dish is saved: ${dish}`);
        } else {
            alert("Please select a dish.");
        }
    });
}
