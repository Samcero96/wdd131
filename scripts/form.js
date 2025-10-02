const products = [
    { id: 'p1', name: 'SuperVacuum 3000' },
    { id: 'p2', name: 'EcoToaster Plus' },
    { id: 'p3', name: 'UltraMixer Pro' }
];

const select = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
});
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("currentyear").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent =
        "Last Modification: " + document.lastModified;
});
