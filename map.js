mapboxgl.accessToken =
    "pk.eyJ1Ijoicm9oYWl6aW1vaGFtZWQiLCJhIjoiY2swcWU3Ym1vMDduajNtcnBkN3owZXhhcSJ9.iSYAlauLQH0MrnHDgvkhug";
var map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
    center: [107.011772, 3.621469], // starting position [lng, lat] 3.621469, 107.011772
    zoom: 6, // starting zoom  1-22
});

var control = new mapboxgl.NavigationControl();
map.addControl(control, "top-left");

var popup = new mapboxgl.Popup({ offset: 30 }).setText(
    "Kuala Lumpur Kes Aktif:43"
); //kl
var popup2 = new mapboxgl.Popup({ offset: 30 }).setText(
    "Selangor Kes Aktif: 92"
); //selangor
var popup3 = new mapboxgl.Popup({ offset: 30 }).setText(
    "Negeri Sembilan Kes Aktif: 19"
); //negeri 9
var popup4 = new mapboxgl.Popup({ offset: 30 }).setText("Melaka Kes Aktif: 531"); //melaka
var popup5 = new mapboxgl.Popup({ offset: 30 }).setText("Johor Kes Aktif: 767"); //johor
var popup6 = new mapboxgl.Popup({ offset: 30 }).setText("Perak Kes Aktif: 406"); //perak
var popup7 = new mapboxgl.Popup({ offset: 30 }).setText("Kedah Kes Aktif: 1112"); //kedah
var popup8 = new mapboxgl.Popup({ offset: 30 }).setText("Perlis Kes Aktif: 3"); //perlis
var popup9 = new mapboxgl.Popup({ offset: 30 }).setText(
    " Kelantan Kes Aktif: 532"
); //kelantan
var popup10 = new mapboxgl.Popup({ offset: 30 }).setText(
    "Terengganu Kes Aktif: 490"
); //terengganu
var popup11 = new mapboxgl.Popup({ offset: 30 }).setText("Pahang Kes Aktif: 429"); //pahang
var popup12 = new mapboxgl.Popup({ offset: 30 }).setText("Sabah Kes Aktif: 913"); //sabah
var popup13 = new mapboxgl.Popup({ offset: 30 }).setText(
    "Sarawak Kes Aktif: 464"
); //sarawak
var popup14 = new mapboxgl.Popup({ offset: 30 }).setText(
    "Pulau Pinang Kes Aktif: 760"
); //pulau pinang

new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([101.684586, 3.13473])
    .addTo(map)
    .setPopup(popup); //kl
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([101.469502, 3.002118])
    .addTo(map)
    .setPopup(popup2); //Selangor
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([102.038402, 2.689074])
    .addTo(map)
    .setPopup(popup3); //Negeri 9
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([102.285162, 2.261139])
    .addTo(map)
    .setPopup(popup4); //Melaka
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([103.329078, 2.173619])
    .addTo(map)
    .setPopup(popup5); //Johor
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([101.075623, 4.476668])
    .addTo(map)
    .setPopup(popup6); //Perak
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([100.562769, 6.034881])
    .addTo(map)
    .setPopup(popup7); //Kedah
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([100.257043, 6.489652])
    .addTo(map)
    .setPopup(popup8); //Perlis
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([102.204205, 6.097009])
    .addTo(map)
    .setPopup(popup9); //Kelantan
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([103.02765, 5.265902])
    .addTo(map)
    .setPopup(popup10); //Terenggani
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([102.377063, 3.952406])
    .addTo(map)
    .setPopup(popup11); //pahang
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([116.155898, 5.325183])
    .addTo(map)
    .setPopup(popup12); //sabah
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([111.821519, 2.275926])
    .addTo(map)
    .setPopup(popup13); //sarawak
new mapboxgl.Marker({ color: "#b40219" })
    .setLngLat([100.262059, 5.384068])
    .addTo(map)
    .setPopup(popup14); //pulau pinang

var currentDate  = new Date(),
    currentDay   = currentDate.getDate() < 10 
    ? '0' + currentDate.getDate() 
    : currentDate.getDate(),
    currentMonth = currentDate.getMonth() < 9 
    ? '0' + (currentDate.getMonth() + 1) 
    : (currentDate.getMonth() + 1);
document.getElementById("date").innerHTML = currentDay + '/' + currentMonth + '/' +  currentDate.getFullYear();