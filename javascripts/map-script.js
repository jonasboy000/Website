document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([51.2194, 4.4025], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
    L.marker([51.2194, 4.4025]).addTo(map).bindPopup('Mijn locatie').openPopup();
});
