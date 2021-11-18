var mymap = L.map('mapOne').setView([26.143697, -81.797660], 13.31);

L.tileLayer('https://api.mapbox.com/styles/v1/juliarubinelli/ckw3r3ybk0rpm14mm9w0xp255/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianVsaWFydWJpbmVsbGkiLCJhIjoiY2t3M3B5eTN3MXRpYTJ1bHRpcXE2bDgzZyJ9.eIIK5jMAT2rTvp3TrYvzzQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);



var markerOne = L.marker([26.130630, -81.801560]).addTo(mymap);
var markerTwo = L.marker([26.138310, -81.806160]).addTo(mymap);
var markerThree = L.marker([26.148420, -81.789130]).addTo(mymap);
var markerFour = L.marker([26.156509, -81.796211]).addTo(mymap);

markerOne.bindPopup("<b>My favorite coffee shop!</b>");
markerTwo.bindPopup("<b>My favorite beach access!</b>").openPopup();
markerThree.bindPopup("<b>The dog park!</b>");
markerFour.bindPopup("<b>One of my favorite restaurants</b>");
