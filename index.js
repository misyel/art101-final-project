// https://leafletjs.com/examples/crs-simple/crs-simple.html

const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1
});

const bounds = [[0,0], [1000,1000]];
const image = L.imageOverlay('map.png', bounds).addTo(map);

map.fitBounds(bounds);

const oakes = L.latLng([ 70, 480.2 ]);
L.marker(oakes).addTo(map).bindPopup('<a href="components/oakes.html">oakes</a>');

const rcc = L.latLng([ 145, 175.2 ]);
L.marker(rcc).addTo(map).bindPopup('<a href="components/rcc.html">RCC</a>');

const porter = L.latLng([ 400, 220]);
L.marker(porter).addTo(map).bindPopup('<a href="components/porter.html">porter</a>');

const kresge = L.latLng([ 600, 220]);
L.marker(kresge).addTo(map).bindPopup('<a href="components/kresge.html">kresge</a>');

const c10 = L.latLng([ 880, 360]);
L.marker(c10).addTo(map).bindPopup('<a href="components/collegeten.html">college ten</a>');

const c9 = L.latLng([ 860, 600]);
L.marker(c9).addTo(map).bindPopup('<a href="components/collegenine.html">college nine</a>');

const crown = L.latLng([ 860, 800]);
L.marker(crown).addTo(map).bindPopup('<a href="components/crown.html">crown</a>');

const merill = L.latLng([ 750, 930]);
L.marker(merill).addTo(map).bindPopup('<a href="components/merill.html">merill</a>');

const stevenson = L.latLng([ 600, 830]);
L.marker(stevenson).addTo(map).bindPopup('<a href="components/stevenson.html">stevenson</a>');

const cowell = L.latLng([ 480, 920]);
L.marker(cowell).addTo(map).bindPopup('<a href="components/cowell.html">cowell</a>');
