const map = L.map("mapid").setView([-22.2490295,-53.3514348], 15);


//create map

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//crrate icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

// create popup overlay
const poup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar Alternativo São José <a href="orphanage.html?id=1" class="choose-orphange"> <img src="./public/images/arrow-white.svg"<a/>')

// create and add marker
L.marker([-22.2504677,-53.3447375], {icon})
  .addTo(map)
  .bindPopup(popup)
