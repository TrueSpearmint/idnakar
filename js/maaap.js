//Нужно, чтобы карта отображалась целиком, а не только в углу. Using setInterval can help the reloading or refreshing of the map itself. 
//https://stackoverflow.com/questions/42204194/leaflet-only-renders-into-one-corner		https://leafletjs.com/reference.html#map-invalidatesize
  setInterval(function() {
     map.invalidateSize();
  }, 0);

//Map coordinating//
var map = L.map('map').setView([58.149035, 52.732186], 17);

//Задаём зум больше стандартного максимального 18//
map.setMaxZoom(22);

//https://devdocs.io/leaflet~1.8/ Задать уровни появления слоёв, искать на странцие Map Panes//
map.createPane('q');
map.getPane('q').style.zIndex = 310;
map.getPane('q').style.pointerEvents = 'none';					

map.createPane('s');
map.getPane('s').style.zIndex = 315;
map.getPane('s').style.pointerEvents = 'none';	

map.createPane('p');
map.getPane('p').style.zIndex = 320;
map.getPane('p').style.pointerEvents = 'none';	

//Загрузка подложек из интернета//
//Mapbox_Outdoors_Idnakar layer//
var Mapbox_Outdoors_Idnakar = L.tileLayer('https://api.mapbox.com/styles/v1/truespearmint/clg4uvia8002d01jzl5o5igoc/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHJ1ZXNwZWFybWludCIsImEiOiJja21xZnRjcG4wN25oMndtcWFoaTgwbHU0In0.MZ_KaXzPzUaXzqGq1sRZRg', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
pane: 'p',
maxZoom: 22,
});
Mapbox_Outdoors_Idnakar.addTo(map);

//Mapbox_Idnakar layer//
var Mapbox_Idnakar = L.tileLayer('https://api.mapbox.com/styles/v1/truespearmint/clg2kgy6n000u01ms3xmq7lbe/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHJ1ZXNwZWFybWludCIsImEiOiJja21xZnRjcG4wN25oMndtcWFoaTgwbHU0In0.MZ_KaXzPzUaXzqGq1sRZRg', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
pane: 'p',
maxZoom: 22,
});

//Mapbox_Satellite//
var Mapbox_Satellite = L.tileLayer('https://api.mapbox.com/styles/v1/truespearmint/cl8j3je6x002815o59qa0zaeu/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHJ1ZXNwZWFybWludCIsImEiOiJja21xZnRjcG4wN25oMndtcWFoaTgwbHU0In0.MZ_KaXzPzUaXzqGq1sRZRg', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
pane: 'q',
maxZoom: 22,
});

//Загрузка подложек с компьютера//
//Компиляция археологических отчётов//
var otcheti = L.tileLayer('tiles/otcheti/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 's',
maxZoom: 22
});

//Разграфка для отчётов//
var razgrafka = L.tileLayer('tiles/razgrafka/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 's',
maxZoom: 22,
maxNativeZoom: 20
});

//План в восточной части//
var topoplan600 = L.tileLayer('tiles/topoplan600/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 's',
maxZoom: 22,
maxNativeZoom: 20
});

//Топоплан Иднакара//
var topoplan = L.tileLayer('tiles/topoplan/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 's',
maxZoom: 22,
maxNativeZoom: 20
});

//Ортофото цветокор WGS 84//
var orthophoto_color = L.tileLayer('tiles/orthophoto_color/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20 //Зум до которого есть тайлы
});

//Ортофото точное WGS 84//
var orthophoto_accurate = L.tileLayer('tiles/orthophoto_accurate/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//ЦММ среднее//
var cmm = L.tileLayer('tiles/cmm/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//Снимок 1975 года//
var keyhole_d3c = L.tileLayer('tiles/keyhole_d3c/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//Снимок 1965 года//
var keyhole_dzb = L.tileLayer('tiles/keyhole_dzb/{z}/{x}/{y}.png', {
attribution: '<a href="https://www.mapbox.com/about/maps/">© Mapbox | </a>',
tms: true,
pane: 'q',
maxZoom: 22,
maxNativeZoom: 20
});

//Layer controller//
var baseMaps = {

};

var overlays = {
  "Современный снимок": Mapbox_Satellite,
  "Снимок 1965 года": keyhole_dzb,
  "Снимок 1975 года": keyhole_d3c,
  "Ортофото (цветокор)": orthophoto_color,
  "Ортофото (точное)": orthophoto_accurate,
  "ЦММ": cmm,
  "Топоплан 1:2000": topoplan,
  "Топоплан 1:600": topoplan600,
  "Разграфка": razgrafka,
  "Отчёты": otcheti,
  "Без подложки": Mapbox_Idnakar,
  "С подложкой": Mapbox_Outdoors_Idnakar
};

var ControlLayers = L.control.layers(baseMaps, overlays).addTo(map);
var ControlScale = L.control.scale().addTo(map);

//Найти расположение пользователя
L.control.locate({flyTo: true}).addTo(map);	