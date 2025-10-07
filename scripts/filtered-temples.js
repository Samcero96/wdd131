// filtered-temples.js
document.addEventListener("DOMContentLoaded", () => {
    // ======== Temple Data (7 originals + 3 added) ========
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake Temple",
            location: "Salt Lake City, Utah, USA",
            dedicated: "1893-04-06",
            area: 253000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
        },
        {
            templeName: "San Diego California Temple",
            location: "San Diego, California, USA",
            dedicated: "1993-04-25",
            area: 72000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/800x500/san-diego-temple-765109-wallpaper.jpg"
        },
        {
            templeName: "Accra Ghana Temple",
            location: "Accra, Ghana",
            dedicated: "2004-01-11",
            area: 17500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
        },
    ]
    // ======== Functions to Display Temples ========
    const displayTemples = (templeList) => {
        const container = document.getElementById("temple-cards");
        container.innerHTML = ""; // clear previous cards

        templeList.forEach((temple) => {
            const card = document.createElement("section");
            card.classList.add("temple-card");
            card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" 
             alt="Photo of ${temple.templeName}" 
             loading="lazy">
      `;
            container.appendChild(card);
        });
    };

    // ======== Filter Functions ========
    const filterOld = () => temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    const filterNew = () => temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    const filterLarge = () => temples.filter(t => t.area > 90000);
    const filterSmall = () => temples.filter(t => t.area < 10000);

    // ======== Navigation Event Listeners ========
    const navLinks = document.querySelectorAll("#main-nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const choice = event.target.textContent.trim().toLowerCase();

            switch (choice) {
                case "old":
                    displayTemples(filterOld());
                    break;
                case "new":
                    displayTemples(filterNew());
                    break;
                case "large":
                    displayTemples(filterLarge());
                    break;
                case "small":
                    displayTemples(filterSmall());
                    break;
                case "home":
                default:
                    displayTemples(temples);
            }
        });
    });

    // ======== Default Display ========
    displayTemples(temples);

    // ======== Footer Date Info ========
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

    // ======== Hamburger Menu (optional mobile feature) ========
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("main-nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
});
