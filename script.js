// ==============================
// GARAGE TOGO — INTERACTIONS
// ==============================

document.addEventListener('DOMContentLoaded', () => {

  // --- Recherche simple : filtre les garages par ville/nom ---
  const searchInput = document.querySelector('.search-box input');
  const searchButton = document.querySelector('.search-box button');
  const garageCards = document.querySelectorAll('.garage-card');

  function filterGarages() {
    const term = searchInput.value.trim().toLowerCase();

    garageCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(term) ? 'flex' : 'none';
    });

    if (term) {
      document.getElementById('garages').scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (searchButton) {
    searchButton.addEventListener('click', filterGarages);
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') filterGarages();
    });
  }

  // --- Boutons "Appeler" : affiche le numéro (à remplacer par les vrais numéros) ---
  document.querySelectorAll('.call-garage').forEach(button => {
    button.addEventListener('click', () => {
      const garageName = button.closest('.garage-card').querySelector('h3').textContent.trim();
      alert(`Numéro de ${garageName} à venir. Ajoute les vrais numéros dans script.js.`);
    });
  });

  // --- Boutons "Voir le garage" : espace réservé pour une future page détail ---
  document.querySelectorAll('.view-garage').forEach(button => {
    button.addEventListener('click', () => {
      const garageName = button.closest('.garage-card').querySelector('h3').textContent.trim();
      alert(`Page détaillée de ${garageName} à venir.`);
    });
  });

});
