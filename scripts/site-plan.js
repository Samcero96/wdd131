document.addEventListener('DOMContentLoaded', initApp);

const recipes = [
    { id: 'r1', name: 'Jollof Rice', region: 'West', time: 45, difficulty: 'Easy' },
    { id: 'r2', name: 'Egusi Soup', region: 'West', time: 60, difficulty: 'Medium' },
    { id: 'r3', name: 'Suya', region: 'North', time: 30, difficulty: 'Easy' }
];

function initApp() {
    renderRecipeList(recipes);
    setupSearch();
    loadFavorites();
    updateFooterDates();
}

function renderRecipeList(list) {
    const container = document.getElementById('recipe-list');
    if (!container) return;
    container.innerHTML = '';
    list.forEach(r => {
        const li = document.createElement('li');
        li.className = 'recipe-card';
        li.innerHTML = `
      <h3>${r.name}</h3>
      <p>Region: ${r.region} · Time: ${r.time} min · ${r.difficulty}</p>
      <button data-id="${r.id}" class="fav-btn" aria-pressed="false">Add Favorite</button>
    `;
        container.appendChild(li);
    });
    container.querySelectorAll('.fav-btn').forEach(btn =>
        btn.addEventListener('click', handleFavoriteClick)
    );
}

function setupSearch() {
    const form = document.getElementById('filterForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const q = document.getElementById('q').value.trim().toLowerCase();
        const filtered = recipes.filter(r => r.name.toLowerCase().includes(q));
        renderRecipeList(filtered);
    });
}

function handleFavoriteClick(e) {
    const id = e.currentTarget.dataset.id;
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(id)) {
        favorites = favorites.filter(fid => fid !== id);
        e.currentTarget.setAttribute('aria-pressed', 'false');
        e.currentTarget.textContent = 'Add Favorite';
    } else {
        favorites.push(id);
        e.currentTarget.setAttribute('aria-pressed', 'true');
        e.currentTarget.textContent = 'Remove Favorite';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesBadge(favorites.length);
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    updateFavoritesBadge(favorites.length);
}

function updateFavoritesBadge(count) {
    const badge = document.getElementById('favCount');
    if (badge) badge.textContent = `${count}`;
}

function updateFooterDates() {
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    const mod = document.getElementById('lastModified');
    if (mod) mod.textContent = `Last Modification: ${document.lastModified}`;
}
