// scripts/place.js
document.addEventListener("DOMContentLoaded", () => {
    // ======== Footer Year + Last Modified ========
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

    // ======== Weather Data (mocked for assignment) ========
    const tempC = 28;
    const windSpeed = 10; // km/h
    const cond = "Sunny";
    const humid = 65;

    // Populate weather data
    document.getElementById("temp").textContent = `${tempC} °C`;
    document.getElementById("cond").textContent = cond;
    document.getElementById("wind").textContent = `${windSpeed} km/h`;
    document.getElementById("humid").textContent = `${humid} %`;

    // ======== Wind Chill Calculation ========
    // The function contains exactly ONE line of code as required.
    function calculateWindChill(t, s) {
        return (t <= 10 && s > 4.8)
            ? (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1)
            : "N/A";
    }

    // Only display if conditions are met
    const windChill = calculateWindChill(tempC, windSpeed);
    const weatherCard = document.querySelector(".weather-card");
    const chillP = document.createElement("p");
    chillP.innerHTML = `<strong>Wind Chill:</strong> ${windChill === "N/A" ? "Not applicable" : windChill + " °C"}`;
    weatherCard.appendChild(chillP);

    // ======== Responsive Icons ========
    // SVG visible only on mobile, emoji only on larger view
    const svgIcon = document.querySelector(".weather-icon-svg");
    const emojiIcon = document.querySelector(".weather-icon-emoji");

    function updateIcons() {
        if (window.innerWidth < 640) {
            svgIcon.style.display = "inline";
            emojiIcon.style.display = "none";
        } else {
            svgIcon.style.display = "none";
            emojiIcon.textContent = cond === "Sunny" ? "☀️" : "🌧️";
            emojiIcon.style.display = "inline";
        }
    }

    updateIcons();
    window.addEventListener("resize", updateIcons);

    // ======== Optional Refresh Button ========
    document.getElementById("refreshWeather").addEventListener("click", () => {
        alert("Weather refreshed! (Demo static data for assignment)");
    });
});
