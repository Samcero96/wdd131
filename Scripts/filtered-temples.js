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

const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "April 6, 1893",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
    },
    {
        name: "San Diego California Temple",
        location: "San Diego, California, USA",
        dedicated: "April 25, 1993",
        area: 72000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/800x500/san-diego-temple-765109-wallpaper.jpg"
    },
    {
        name: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "January 11, 2004",
        area: 17500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },

    // ➕ Add at least three more of your own:
    {
        name: "Paris France Temple",
        location: "Le Chesnay, France",
        dedicated: "May 21, 2017",
        area: 44000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/800x500/Paris-Temple01.jpg"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "March 10, 2019",
        area: 41000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/2-Rome-Temple-2190090.jpg"
    },
    {
        name: "Sydney Australia Temple",
        location: "Carlingford, Australia",
        dedicated: "September 20, 1984",
        area: 30500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/800x500/sydney-australia-temple-766362-wallpaper.jpg"
    }
];
const container = document.getElementById("temple-cards");

temples.forEach(temple => {
    const card = document.createElement("figure");
    card.classList.add("temple-card");

    card.innerHTML = `
    <img src="${temple.imageUrl}" 
         alt="${temple.name}" 
         loading="lazy">
    <figcaption>
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    </figcaption>
  `;
    container.appendChild(card);
});


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
        hamburger.textContent = nav.classList.contains('show') ? '✖' : '☰';
    });

    // Temple cards
    const temples = [ /* …your temple objects… */];
    const container = document.getElementById("temple-cards");

    temples.forEach(temple => {
        const card = document.createElement("figure");
        card.classList.add("temple-card");
        card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
      <figcaption>
        <h2>${temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>`;
        container.appendChild(card);
    });
});
