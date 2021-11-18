
let map = L.map('mapTwo').setView([27.682664, -82.851424], 6.49);

L.tileLayer('https://api.mapbox.com/styles/v1/juliarubinelli/ckw3wp4d00psi14mzgdsv2xrt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianVsaWFydWJpbmVsbGkiLCJhIjoiY2t3M3B5eTN3MXRpYTJ1bHRpcXE2bDgzZyJ9.eIIK5jMAT2rTvp3TrYvzzQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].lattitude, places[i].longitude ] )
  .bindPopup('<h3>' + places[i].placeName + '<h3>' + '<p>' + places[i].descrip + '</p>')
  .addTo(map);
}
