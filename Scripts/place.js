document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("currentyear").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent =
        "Last Modification: " + document.lastModified;
});
document.getElementById('refreshWeather').addEventListener('click', () => {
    const temps = [27, 28, 29, 30];
    const conds = ['Sunny', 'Partly Cloudy', 'Rainy', 'Humid'];
    const winds = [5, 10, 15];
    const humidities = [60, 65, 70];

    document.getElementById('temp').textContent =
        `${temps[Math.floor(Math.random() * temps.length)]} °C`;
    document.getElementById('cond').textContent =
        conds[Math.floor(Math.random() * conds.length)];
    document.getElementById('wind').textContent =
        `${winds[Math.floor(Math.random() * winds.length)]} km/h`;
    document.getElementById('humid').textContent =
        `${humidities[Math.floor(Math.random() * humidities.length)]} %`;
});
