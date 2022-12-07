let links = document.querySelectorAll('.scroll');
let targetID;

links.forEach(function(element) {
   element.addEventListener('click', function(event) {
       event.preventDefault();
       targetID = element.getAttribute('href');
       document.querySelector(targetID).scrollIntoView({
           behavior: 'smooth',
           block: 'start',
       })
   }); 
});







let find = document.querySelector('.find');
find.addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        coords = position.coords;
        console.log(coords);
        let latitude = 41.31275;
        let longitude = 69.2933;
        let map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([longitude, latitude]),
                zoom: 18
            })
        })
    });
});
var offer = new Date("Jul 14, 1986 12:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = now - offer;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    document.querySelector(".Timer").innerHTML = "С создания губки боба прошло " + days + " лет";

}, 1000)







var page = document.querySelector(".body");
var themeButton = document.querySelector(".themeButton");

themeButton.onclick = function() {
page.classList.toggle("lightTheme");
page.classList.toggle("darkTheme");
};

