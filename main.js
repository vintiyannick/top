var map = L.map('map').setView([45.109544, 7.641281], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([45.109544, 7.641281]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();